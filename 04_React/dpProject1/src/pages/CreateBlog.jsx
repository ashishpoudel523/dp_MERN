import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    subTitle: "",
    description: "",
    image: "",
  });

  //form ma type garda onChange hunxa yo handleChange function call hunxa
  //form ko input tag vitra ko function  use garda jahile ni e = event ma store vairako hunxa
  const handleChange = (e) => {
    //console.log(e.target.name);
    //console.log(e.target.value);
    const { name, value } = e.target;
    setData({
      //spread operator used - agadi store vako value tettikai xoddxa, pachi j naya aayo tyo chai value ma gayera update garxa
      ...data,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };
  //console.log("triggered");   for checking whether data is passed or not ie debugging
  console.log(data);

  const createBlog = async (e) => {
    //yo preventdafault garesi form submit garda page reload hudaina
    e.preventDefault();
    const response = await axios.post(
      "https://ashishpoudel23.onrender.com/blog",
      data,
      {
        headers: {
          // content type simple text json bahek aru image xa vane multipart use garni
          "Content-Type": "multipart/form-data",
        },
      }
    );
    if (response.status === 200) {
      navigate("/");
      console.log("form submitted");
    } else alert("Form Not Submitted!");
    //console.log(response);
  };
  return (
    <>
      <Navbar />
      <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
        <div className="mt-10 text-center font-bold">Ashish Blog</div>
        <div className="mt-3 text-center text-4xl font-bold">Create Blog</div>
        <form onSubmit={createBlog}>
          <div className="p-8">
            <div className="flex gap-4">
              <input
                type="text"
                name="title"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Title*"
                onChange={handleChange}
              />

              <input
                type="text"
                name="subTitle"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="Sub Title *"
                onChange={handleChange}
              />
            </div>
            <div className="my-6 flex gap-4">
              <input
                type="file"
                name="image"
                className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                onChange={handleChange}
              />
            </div>
            <div className="">
              <textarea
                name="description"
                id="text"
                cols="30"
                rows="10"
                className="mb-10 h-40 w-full resize-none rounded-md border border-slate-300 p-5 font-semibold text-black-300"
                placeholder="Description *"
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="cursor-pointer rounded-lg bg-blue-700 px-8 py-5 text-sm font-semibold text-white"
                onSubmit={createBlog}
              >
                Create Blog
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
