import PropTypes from "prop-types";
import "./customButtons.scss";
export const FilledButton = ({ props, title, className, icon }) => {
  return (
    <div>
      <button className={`filled_button ${className}`} {...props}>
        {title} {icon}
      </button>
    </div>
  );
};

FilledButton.propTypes = {
  props: PropTypes.any,
  title: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.any,
};
