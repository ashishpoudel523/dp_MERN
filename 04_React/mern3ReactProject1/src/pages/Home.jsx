import { Link } from "react-router-dom";
import "./Home.css";
import Card from "./Card";

const Home = () => {
  return (
    //This fragment.
    <>
      <nav className="navbar">
        <h1>This is heading.</h1>;
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
        <br />
        <Card title="Home Page" />
      </nav>
    </>
  );
};
export default Home;
