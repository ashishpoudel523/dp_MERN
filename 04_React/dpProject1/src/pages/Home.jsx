import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:3020/blog");
    setBlogs(response.data.data);
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

  // console.log(blogs);

  return (
    <>
      <Navbar />
      <h1>Learning React + Tailwind CSS</h1>
      <div className="flex flex-wrap">
        {blogs.map((blog) => {
          return <Card blog={blog} />;
        })}
      </div>
    </>
  );
};

export default Home;
