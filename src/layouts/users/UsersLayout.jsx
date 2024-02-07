import { propTypes } from "prop-types";
import Header from "./Header";

const UsersLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default UsersLayout;
