import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import ProductForm from "./ProductForm";

export default function EditProductPage() {
  const navigate = useNavigate();
  const [postResponse, setPostResponse] = useState("");
  const { id } = useParams(); 
  const [formData, setFormData] = useState({
    productName: "",
    brand: "",
    image: "",
    price: "",
  });
  

  // Fetch existing product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/products/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProduct();
  }, [id]);

  // Handle input changes
  const handleOnChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`http://localhost:3000/products/${id}`, formData);
      setPostResponse(`${response.data.productName} updated successfully!`);
     
    } catch (error) {
      console.log(error.message);
      setPostResponse("Error updating product.");
    }
  };

  return (
    <div className="edit-product-page">
      <ProductForm
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        formData={formData}
        postResponse={postResponse}
        isEditing={true}
      />
      <p>
        <a href="/main" style={{ color: "blue" }}>
          Click here to go back to main page
        </a>
      </p>
    </div>
  );
}
