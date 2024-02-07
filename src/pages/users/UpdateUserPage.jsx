import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateUserPage = () => {
  const [user, setUSer] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const params = useParams();
  const navigate = useNavigate();
  const id = params.id;

  useEffect(() => {
    (async function getUser() {
      let { data } = await axios.get(`/users/${id}`);
      setUSer(data);
      setName(data.name);
      setEmail(data.email);
    })();
  }, [id]);

  const UpdateBtn = async (e) => {
    e.preventDefault();
    let updateUser = user;
    updateUser.name = name;
    updateUser.email = email;
    updateUser.password = password;
    if (password.length < 6) {
      toast.error("Please enter more than 6 digit code!");
    }
    try {
      let { data } = await axios.put(`/users/${id}`, updateUser);
      toast.success("Update user successfull");
      navigate("/users");
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };
  return (
    <div className="bg-[rgba(0,0,0,0.4)] flex items-center h-screen w-full">
      <div className="bg-white w-[500px] rounded-xl mx-auto p-5">
        <h2 className="text-center text-2xl text-blue-500 font-semibold ">
          Update user info
        </h2>
        <form onSubmit={UpdateBtn} className="flex flex-col  gap-5">
          <label htmlFor="name">
            Name:
            <input
              className="w-full border p-2 outline-none rounded-xl px-3 mt-2"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              id="name"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              className="w-full border p-2 outline-none rounded-xl px-3 mt-2"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              className="w-full border p-2 outline-none rounded-xl px-3 mt-2"
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </label>
          <button
            type="submit"
            className="bg-blue-700 p-2 text-xl text-white rounded-lg"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserPage;
