import { useNavigate } from "react-router-dom";

export default function FormComponent({
  formData,
  handleOnSubmit,
  handleOnChange,
  currentPage,
  nextPage,
  postResponse,
}) {
  const navigate = useNavigate();

  return (
    <div>
      <h1>{currentPage}</h1>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleOnChange}
        />
        <br /><br></br>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          id="password"
          value={formData.password}
          onChange={handleOnChange}
        />
        <br /><br></br>
        <button type="submit">{currentPage === "Create User" ? "Create User" : "Login"}</button>
      </form>
      <p>{postResponse}</p>
      {nextPage && currentPage !== "Create User" && (
        <p>
          Not a member yet? Click{" "}
          <a href="/create-user" style={{ textDecoration: "underline", color: "blue" }}>
            here
          </a>{" "}
          to join
        </p>
      )}
      {nextPage && currentPage === "Create User" && (
        <p>
          <a href="/" style={{ textDecoration: "underline", color: "blue" }}>
            Back to Login Page
          </a>
        </p>
      )}
    </div>
  );
}
