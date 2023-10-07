// /* eslint-disable react-refresh/only-export-components */
// import React, { useState, useEffect } from "react";
import "./sidebar.scss";
// import NavLink from "./NavLink";
// import { LogoImg } from "../../assets";

import { TbArrowsShuffle } from "react-icons/tb";
// import {
//   bottomSideBarItems,
//   topSideBarItems,
// } from "../../shared/constants/data";
import { FaAngleDown } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   function findActiveSidebarItem(currentUrl) {
//     const allSidebarItems = [...topSideBarItems, ...bottomSideBarItems];

//     // Loop through all sidebar items
//     for (const item of allSidebarItems) {
//       if (item.link === currentUrl) {
//         // If the item's link matches the current URL, it's active
//         return item;
//       }

//       // Check if the item has items and search within them
//       if (item.items) {
//         for (const childItem of item.items) {
//           if (childItem.link === currentUrl) {
//             return childItem;
//           }
//         }
//       }
//     }
//     return null;
//   }
//   const [isActive, setIsActive] = useState("Dashboard");
//   useEffect(() => {
//     const currentUrl = location.pathname;

//     const activeSidebarItem = findActiveSidebarItem(currentUrl);
//     if (activeSidebarItem) {
//       setIsActive(activeSidebarItem.name);
//     }
//   }, [location.pathname, isActive]);

//   return (
//     <div className="sidebar">
//       <div className="sidebar_logo">
//         <img src={LogoImg} alt="" />
//       </div>
//       <div className="sidebar_module">
//         <div className="sidebar_module_item">
//           <div className="module_icon">
//             <TbArrowsShuffle />
//           </div>
//           <div className="module_desc">
//             <span>Switch Module</span>
//             <b>Payroll Management</b>
//           </div>
//         </div>
//         <FaAngleDown />
//       </div>
//       <ul className="sidebar_items">
//         {topSideBarItems.map((item, index) => (
//           <li key={index} className="sidebar_item">
//             <NavLink
//               name={item.name}
//               icon={item.icon}
//               isActive={isActive}
//               handleClick={(event) => {
//                 event.preventDefault();
//                 if (!item.disabled) {
//                   setIsActive(item?.name);
//                   navigate(item?.link);
//                 }
//               }}
//             >
//               {item.items &&
//                 item.items.map((child, childIndex) => (
//                   <div className="sidebar_item_child" key={childIndex}>
//                     <NavLink
//                       name={child.name}
//                       imgUrl={child.imgUrl}
//                       isActive={child.isActive}
//                     />
//                   </div>
//                 ))}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//       <hr />
//       <ul className="sidebar_items">
//         {bottomSideBarItems.map((item, index) => (
//           <li key={index} className="sidebar_item">
//             <NavLink
//               key={item.name}
//               name={item.name}
//               icon={item.icon}
//               isActive={isActive}
//               handleClick={() => {
//                 console.log("clicked");
//               }}
//             >
//               {item.items &&
//                 item.items.map((child, childIndex) => (
//                   <div
//                     className="sidebar_item_child"
//                     key={childIndex}
//                     style={{
//                       color: isActive === child.name ? "#2D416F" : "red",
//                     }}
//                   >
//                     <NavLink
//                       key={child.name}
//                       name={child.name}
//                       icon={child.icon}
//                     />
//                   </div>
//                 ))}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default React.memo(Sidebar);

/* eslint-disable react-refresh/only-export-components */
import React, { useEffect, useState } from "react";
import { Layout, Menu, theme } from "antd";
import { LogoImg } from "../../assets";
import { useLocation, useNavigate } from "react-router-dom";

import {
  bottomSideBarItems,
  topSideBarItems,
} from "../../shared/constants/data";

const { Sider } = Layout;

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [childSelectedKey, setChildSelectedKey] = useState(null);
  console.log(childSelectedKey);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleMenuClick = (key) => {
    // const selectedItem = [...topSideBarItems, ...bottomSideBarItems].find(
    //   (item) => item.key === key
    // );

    // if (selectedItem && !selectedItem.disabled) {
    //   if (selectedItem.items) {
    //     // Submenu item clicked
    //     setSelectedKeys([key]); // Set the submenu key as selected
    //   } else {
    //     // Top-level item clicked
    //     setSelectedKeys([key]);
    //   }

    //   navigate(key);
    // }
    const selectedTopLevelItem = topSideBarItems.find((item) =>
      item.items
        ? item.items.some((child) => child.key === key)
        : item.key === key
    );

    const selectedChildItem =
      selectedTopLevelItem &&
      selectedTopLevelItem.items &&
      selectedTopLevelItem.items.find((child) => child.key === key);

    if (selectedTopLevelItem && !selectedTopLevelItem.disabled) {
      setSelectedKeys([selectedTopLevelItem.key]);
      if (selectedChildItem) {
        setChildSelectedKey(selectedChildItem.key);
      }
      navigate(key);
    }
  };

  const [selectedKeys, setSelectedKeys] = useState([]);

  useEffect(() => {
    const path = location.pathname;
    const allSidebarItems = [...topSideBarItems, ...bottomSideBarItems];
    const link = allSidebarItems.find((item) => {
      if (item.key === path) {
        return true; // Match found in top-level items
      }
      if (item.items) {
        // Check child items within submenus
        const childLink = item.items.find((child) => child.key === path);
        return !!childLink; // Return true if a child link matches
      }
      return false;
    });
    console.log(link);
    if (link) {
      setSelectedKeys([link.key]);
    }
  }, [location.pathname]);

  return (
    <div>
      <Layout
        hasSider
        // style={{ padding: "24px 0", background: "#fff" }}
        className="sidebar_container"
      >
        <Sider
          style={{ background: colorBgContainer }}
          width={310}
          className="sidebar"
        >
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <img
              src={LogoImg}
              alt="Logo"
              className=" sidebar_logo"
              // style={{ width: "60%", height: "auto", padding: "0.5rem" }}
            />
            <div className="sidebar_module">
              <div className="sidebar_module_item">
                <div className="module_icon">
                  <TbArrowsShuffle />
                </div>

                <div className="module_desc">
                  <span>Switch Module</span>
                  <b>Payroll Management</b>
                </div>
              </div>
              <FaAngleDown />{" "}
            </div>
          </div>
          <div className="sidebar_items">
            <Menu
              onClick={({ key }) => {
                handleMenuClick(key);
              }}
              mode="inline"
              className="sidebar_menu"
              selectedKeys={selectedKeys}
              defaultSelectedKeys={["/dashboard"]}
            >
              {topSideBarItems.map((item) => {
                if (item.items) {
                  return (
                    <Menu.SubMenu
                      className="sidebar_subitem_item"
                      key={item.key}
                      icon={item.icon}
                      title={item.name}
                    >
                      {item.items.map((child) => (
                        <Menu.Item key={child.key}>{child.name}</Menu.Item>
                      ))}
                    </Menu.SubMenu>
                  );
                }
                return (
                  <Menu.Item
                    className="sidebar_item"
                    key={item.key}
                    icon={item.icon}
                  >
                    <span>{item.name}</span>
                  </Menu.Item>
                );
              })}
            </Menu>
            <hr />
            <Menu
              onClick={({ key }) => handleMenuClick(key)}
              selectedKeys={selectedKeys}
              defaultSelectedKeys={["/dashboard"]}
              mode="inline"
              className="sidebar_menu"
            >
              {bottomSideBarItems.map((item) => {
                if (item.items) {
                  return (
                    <Menu.SubMenu
                      className="sidebar_subitem_item"
                      key={item.key}
                      icon={item.icon}
                      title={item.name}
                    >
                      {item.items.map((child) => (
                        <Menu.Item
                          className="text-ruppiesColor"
                          key={child.key}
                        >
                          {child.name}
                        </Menu.Item>
                      ))}
                    </Menu.SubMenu>
                  );
                }
                return (
                  <Menu.Item
                    className="sidebar_item"
                    key={item.key}
                    icon={item.icon}
                  >
                    <span>{item.name}</span>
                  </Menu.Item>
                );
              })}
            </Menu>
          </div>
        </Sider>
      </Layout>
    </div>
  );
};

export default React.memo(Sidebar);
