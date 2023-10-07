/* eslint-disable react-refresh/only-export-components */
import React from "react";
import "./topbar.scss";
import { LargeSearchInputField } from "../../shared/UIs/InputField/InputField";
import { GoHomeFill } from "react-icons/go";
import { FaAngleDown } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { ProfileImg } from "../../assets";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar_left">
        <div className="topbar_company_select">
          <GoHomeFill className="topbar_home_icon" />
          <div className="topbar_left_content">
            <p>Change Organisation</p>
            <span>PaperSoft Limited</span>
          </div>
          <FaAngleDown />
        </div>
        <LargeSearchInputField placeholder={"Search for anything"} />
      </div>
      <div className="topbar_right">
        <div className="topbar_right_notification">
          <IoMdNotifications className="topbar_right_icon" />
          <span className="topbar_right_red_dot"></span>
        </div>
        <div className="topbar_right_profile">
          <div className="profile_img_container">
            <img src={ProfileImg} alt="heree" />
          </div>
          <div className="topbar_right_content">
            <p>Henry Okoro</p>
            <span>Payroll Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Topbar);
