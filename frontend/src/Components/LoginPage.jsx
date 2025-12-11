import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormComponent from "./FormComponent";
import Cookies from "js-cookie";

export default function LoginPage() {
    //states
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [postResponse, setPostResponse] = useState("");

  //Navigate
  const navigate = useNavigate();

  //Handlers
  const handleOnChange = (e) => {
    setFormData((prevData) => {
        return { ...prevData, [e.target.name]: e.target.value };
  });
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:3000/login",{
         ...formData,
        });
        setPostResponse(response.data.message);
      if (response.status === 201) {
        navigate("/main");
        Cookies.set("username", formData.username); 
        Cookies.set("jwt-authorization", response.data.token);       
      }
     
    } catch (error) {
        console.log(error);
       if (error.response.data.message) {
        setPostResponse(error.response.data.message);
      } else {
        setPostResponse("Login failed. Try again.");
      }
    }
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleLogin();
    setFormData({ username: "", password: "" });
  };

  return (
    <div>
      <FormComponent
        formData={formData}
        postResponse={postResponse}
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        currentPage="Groceries App"
        nextPage="create-user"
      />
    </div>
  );
}
