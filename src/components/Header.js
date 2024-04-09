import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import Button from "./Button";
const Header = ({ title, ButtonClick, showAddTask }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      { location.pathname === '/' &&
        (<Button
          text={showAddTask ? "close" : "Add"}
          color={showAddTask ? "red" : "green"}
          onClick={ButtonClick}
        ></Button>
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
