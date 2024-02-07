import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const LoginBtn = async (data) => {
    try {
      let { data: users } = await axios.get("/users");
      console.log(users);
      if (users) {
        let user = users.find((item) => {
          if (item.password === data.password && item.email === data.email) {
            return item;
          }
        });
        let hasUser = Boolean(user);
        if (hasUser) {
          let token = (Math.random() * 50).toString(16);
          localStorage.setItem("token", token);
          toast.success("Your sign up successfully");
          navigate("/users");
        }
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
          Login
        </h2>
        <p className="text-center text-xl font-[500]">Sign Into Your Account</p>
        <form
          onSubmit={handleSubmit(LoginBtn)}
          className="flex flex-col  gap-5"
        >
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
            Sign In
          </button>
        </form>
        <div className="flex gap-5 my-5">
          <p>Don&apos;t have account?</p>{" "}
          <Link to="/auth/register" className="text-blue-500">
            Go To Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
