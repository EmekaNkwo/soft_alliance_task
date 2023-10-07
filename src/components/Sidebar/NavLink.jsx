/* eslint-disable react/display-name */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import "./navlink.scss";

const NavLink = React.memo(
  ({ name, icon, isActive, disabled, handleClick, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
      setIsExpanded(!isExpanded);
    };

    return (
      <div
        style={{
          backgroundColor: isActive === name ? "#4baa79" : "",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        className="navlink_container expanded"
        onClick={handleClick}
      >
        <div className="nav_item" onClick={handleToggleExpand}>
          <div
            className="nav_items"
            style={{
              color: isActive === name ? "#fff" : "#818da9",
            }}
          >
            {icon && icon}
            <span className="nav_item_name">{name}</span>
          </div>
          {children && (
            <span
              className="nav_item_icon"
              style={{
                color: isActive === name ? "#fff" : "#818da9",
              }}
            >
              {isExpanded ? <FaAngleUp /> : <FaAngleDown />}
            </span>
          )}
        </div>
        {children && isExpanded && (
          <div
            className="nav_sub_menu"
            style={{
              backgroundColor: isActive === name ? "#4baa79" : "",
            }}
          >
            {children}
          </div>
        )}
      </div>
    );
  }
);

NavLink.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.any,
  isActive: PropTypes.bool,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.node,
};

export default NavLink;
