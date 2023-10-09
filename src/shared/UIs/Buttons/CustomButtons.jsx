import PropTypes from "prop-types";
import "./customButtons.scss";
export const FilledButton = ({ onClick, title, className, icon }) => {
  return (
    <button className={`filled_button ${className}`} onClick={onClick}>
      {title} {icon}
    </button>
  );
};

export const OutlinedButton = ({ onClick, title, className, icon }) => {
  return (
    <button className={`outlined_button ${className}`} onClick={onClick}>
      {title} {icon}
    </button>
  );
};

FilledButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.any,
};
OutlinedButton.propTypes = {
  onClick: PropTypes.func,
  title: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.any,
};
