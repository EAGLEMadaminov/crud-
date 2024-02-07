import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogOutBtn = () => {
    localStorage.clear("token");
    navigate("/auth/sign-in");
  };
  return (
    <div
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
      className=" fixed top-0 w-full flex flex-wrap justify-center md:px-16 md:justify-between items-center py-4 text-white border-b-[3px] border-[#1996AA]"
    >
      <Link to="/" className="flex items-center hover:text-[#17A2B8]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-code-slash"
          viewBox="0 0 16 16"
        >
          <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z" />
        </svg>
        <h1 className="text-3xl">DevConnector</h1>
      </Link>
      <ul className="flex mt-5 md:mt-0 items-center">
        <li className="mx-1 md:mx-3 md:text-xl">
          <Link to="/users" className="hover:text-[#17A2B8]">
            Developers
          </Link>
        </li>
        <li className="mx-1 md:mx-3 md:text-xl">
          <Link to="/users/add" className="hover:text-[#17A2B8]">
            Add User
          </Link>
        </li>
        <li className="mx-1 md:mx-3 md:text-xl">
          <button onClick={handleLogOutBtn} className="hover:text-[#17A2B8]">
            Log out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;
