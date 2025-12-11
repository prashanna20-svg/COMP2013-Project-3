import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ProductForm from "./ProductForm";

export default function AddProductPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productName: "",
    brand: "",
    image: "",
    price: "",
  });
  const [postResponse, setPostResponse] = useState("");

  // Handle input changes
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/add-product", formData);
      setPostResponse(`${response.data.productName} added successfully!`);
      setFormData({
        productName: "",
        brand: "",
        image: "",
        price: "",
      });

    } catch (error) {
      console.log(error.message);
      setPostResponse("Error adding product.");
    }
  };

  return (
    <div className="add-product-page">
 
      <ProductForm
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        formData={formData}
        postResponse={postResponse}
        />
      <p>
        <a href="/main" style={{ color: "blue" }}>
          Click here to go back to main page
        </a>
      </p>
    </div>
  );
}
