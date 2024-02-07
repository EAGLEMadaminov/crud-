import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const RegisterBtn = async (data) => {
    const id = (Math.random() * 20).toString(36);
    data.id = id;
    data.status = "active";
    try {
      let { data: user } = await axios.post("/users", data);
      console.log(user);
      if (user) {
        toast.success("Your sign up successfully");
        let token = (Math.random() * 50).toString(26);
        localStorage.setItem("token", token);
        navigate("/users");
      }
    } catch (error) {
      console.log(error);
      toast.error("Email incorrect please check email!");
    }
  };
  return (
    <div className="bg-[rgba(0,0,0,0.4)] flex items-center h-screen w-full">
      <div className="bg-white w-[500px] rounded-xl mx-auto p-5">
        <h2 className="text-3xl font-semibold mb-5 text-blue-500 text-center">
          Sign Up
        </h2>
        <p className="text-center text-xl font-[500]">Create Your Account</p>
        <form
          onSubmit={handleSubmit(RegisterBtn)}
          className="flex flex-col  gap-5"
        >
          <label htmlFor="name">
            Name:
            <input
              className="w-full border p-2 outline-none rounded-xl px-3 mt-2"
              type="text"
              placeholder="Enter your name"
              id="name"
              {...register("name")}
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              className="w-full border p-2 outline-none rounded-xl px-3 mt-2"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              {...register("email")}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              className="w-full border p-2 outline-none rounded-xl px-3 mt-2"
              type="password"
              id="password"
              placeholder="Enter password"
              required
              {...register("password")}
            />
          </label>
          <button
            type="submit"
            className="bg-blue-700 p-2 text-xl text-white rounded-lg"
          >
            Register
          </button>
        </form>
        <div className="flex gap-5 my-5">
          <p>Already have account?</p>{" "}
          <Link to="/auth/sign-in" className="text-blue-500">
            Go To Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
