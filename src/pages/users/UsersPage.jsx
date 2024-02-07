import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const UsersPage = () => {
  const navigate = useNavigate();
  const [allUsers, setAllUsers] = useState([]);
  const [isBlockek, setIsBlocked] = useState(false);
  const [isDeleteUser, setIsDeleteUser] = useState(false);
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth/sign-in");
    }
    (async function getAllUsers() {
      try {
        let { data } = await axios.get("/users");
        setAllUsers(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [isBlockek, navigate, isDeleteUser]);

  const handleBlockUser = async (item) => {
    item.status = "block";
    try {
      let { data } = await axios.put(`/users/${item.id}`, item);
      if (data) {
        setIsBlocked(!isBlockek);
        toast.success("user block successfully");
      }
    } catch (error) {
      toast.error("Network error");
    }
  };
  const handleUnBlockUser = async (item) => {
    setIsBlocked(!isBlockek);
    item.status = "active";
    try {
      let { data } = await axios.put(`/users/${item.id}`, item);
      if (data) {
        toast.success("user block successfully");
      }
    } catch (error) {
      toast.error("Network error");
    }
  };

  const handleDeleteBtn = async (item) => {
    try {
      let { data } = await axios.delete(`/users/${item.id}`);
      setIsDeleteUser(!isDeleteUser);
      toast.success("User deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Network error");
    }
  };

  return (
    <div className="mt-[100px]">
      <table className="mx-auto mt-10 text-center">
        <thead>
          <tr>
            <th className="p-2 text-center w-[">N</th>
            <th className="p-2 text-center w-[200px]">Name</th>
            <th className="p-2 text-center w-[200px]">Email</th>
            <th className="p-2 text-center w-[">Status</th>
            <th className="p-2 text-center w-[200px]">Change status</th>
            <th className="p-2 text-center w-[200px]">Actions</th>
          </tr>
        </thead>
        <tbody>
          {allUsers.map((item, index) => {
            return (
              <tr key={index}>
                <td className="p-2 my-2">{index + 1}</td>
                <td className="p-2 my-2">{item.name}</td>
                <td className="p-2 my-2">{item.email}</td>
                <td className="p-2 my-2">{item.status}</td>
                <td className="flex justify-center gap-4 my-2">
                  {item.status === "active" ? (
                    <button
                      onClick={() => handleBlockUser(item)}
                      className=" bg-rose-500 w-[80px] text-white p-2 px-3 rounded-lg"
                    >
                      Block
                    </button>
                  ) : (
                    <button
                      onClick={() => handleUnBlockUser(item)}
                      className="bg-green-500 w-[80px] text-white p-2 px-3 rounded-lg"
                    >
                      Unblock
                    </button>
                  )}
                </td>
                <td className="p-2 my-2">
                  <button
                    onClick={() => handleDeleteBtn(item)}
                    className=" bg-rose-600 text-white p-2 px-3 rounded-lg"
                  >
                    Delete
                  </button>
                  <Link
                    to={`user/${item.id}`}
                    className="bg-green-500 text-white p-2 px-3 ml-2 rounded-lg"
                  >
                    🖋
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
