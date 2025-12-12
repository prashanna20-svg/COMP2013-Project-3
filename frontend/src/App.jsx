import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import CreatePage from "./Components/CreatePage";
import PageNotFound from "./Components/PageNotFound";
import GroceriesAppContainer from "./Components/GroceriesAppContainer";
import AddProductPage from "./Components/AddProductPage";
import EditProductPage from "./Components/EditProductPage"; 
import NotAuthorized from "./Components/NotAuthorized";
import PrivateRoute from "./Components/PrivateRoute"; 
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-user" element={<CreatePage />} />
        <Route path="/not-authorized" element={<NotAuthorized />} />

        <Route element={<PrivateRoute />}>
          <Route path="/main" element={<GroceriesAppContainer />} />
          <Route path="/add-product" element={<AddProductPage />} />
          <Route path="/edit-product/:id" element={<EditProductPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
