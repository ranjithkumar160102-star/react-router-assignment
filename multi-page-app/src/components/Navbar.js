import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        background: "#333",
        padding: "10px",
      }}
    >
      <h2 style={{ color: "white" }}>My App</h2>

      <div>
        <NavLink to="/" style={{ color: "white", margin: "10px" }}>
          Home
        </NavLink>

        <NavLink to="/about" style={{ color: "white", margin: "10px" }}>
          About
        </NavLink>

        <NavLink to="/users" style={{ color: "white", margin: "10px" }}>
          Users
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;