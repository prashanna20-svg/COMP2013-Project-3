export default function NavBar({ quantity, username, handleLogout, handleAddProduct  }) {
  const isAdmin = username === "admin" || username === "Admin";

  return (
    <nav className="NavBar">
      <div className="NavDiv NavUser">
        <h3>Hello, {username}</h3>
        <button onClick={handleLogout} >
          Logout
        </button>
      </div>
      <div className="NavDiv NavTitle">
        <h2>Groceries App 🍎</h2>
         {isAdmin && (
          <button onClick={handleAddProduct} >
            Add Product
          </button>
        )}
      </div>
      <div className="NavDiv NavCart">
        <img
          src={
            quantity > 0
              ? "src/assets/cart-full.png"
              : "src/assets/cart-empty.png"
          }
        />
      </div>
    </nav>
  );
}
