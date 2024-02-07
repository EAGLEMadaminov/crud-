import propTypes from "prop-types";

const AuthGuard = ({ children }) => {
  return <div>{children}</div>;
};

export default AuthGuard;

AuthGuard.propTypes = {
  children: propTypes.node,
};
