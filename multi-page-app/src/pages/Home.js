import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>

<Link to ={"/about"}>Go to About Page</Link>
    </div>
  );
}

export default Home;