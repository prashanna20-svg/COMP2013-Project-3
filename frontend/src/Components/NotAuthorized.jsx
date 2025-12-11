import { Link } from "react-router-dom";

export default function NotAuthorized() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Error: 403 - User not authorized</h1>
      <p>You must be logged in to access this page.</p>
      <Link to="/login" style={{ color: "blue" }}>
        Back to login page
      </Link>
    </div>
  );
}
