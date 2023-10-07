import { BsSearch } from "react-icons/bs";
import PropTypes from "prop-types";
import "./inputField.scss";
export const LargeSearchInputField = ({
  props,
  placeholder,
  inputClassName,
}) => {
  return (
    <div className="largesearchField">
      <input
        type="text"
        className={`search_input ${inputClassName}`}
        placeholder={placeholder}
        {...props}
      />
      <div className="search_icon_container">
        <BsSearch className="search_icon" />
      </div>
    </div>
  );
};

export const SearchInputField = ({ props, placeholder, inputClassName }) => {
  return (
    <div className="searchField">
      <input
        type="text"
        className={`search_input ${inputClassName}`}
        placeholder={placeholder}
        {...props}
      />
      <div className="search_icon_container">
        <BsSearch className="search_icon" />
      </div>
    </div>
  );
};

SearchInputField.propTypes = {
  props: PropTypes.any,
  placeholder: PropTypes.string,
  inputClassName: PropTypes.string,
};

LargeSearchInputField.propTypes = {
  props: PropTypes.any,
  placeholder: PropTypes.string,
  inputClassName: PropTypes.string,
};
