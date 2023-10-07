import { FaNetworkWired, FaUser, FaUsers } from "react-icons/fa";
import { MdDashboard, MdOutlineLogout, MdSettings } from "react-icons/md";

import { BsGraphUpArrow } from "react-icons/bs";

export const topSideBarItems = [
  {
    name: "Dashboard",
    icon: <MdDashboard />,
    key: "/dashboard",
    disabled: true,
  },
  {
    name: "Payroll Activities",
    icon: <BsGraphUpArrow />,
    key: "/payroll",
    disabled: true,
    items: [
      {
        name: "Overview",
        icon: "",
        key: "#",
        disabled: true,
      },
    ],
  },
  {
    name: "Salary Structure",
    icon: <FaNetworkWired />,
    key: "/salary",
    disabled: true,
  },

  {
    name: "Element Setup",
    icon: <MdSettings />,
    key: "",
    // disabled: false,
    items: [
      {
        name: "Elements",
        icon: "",
        key: "/dashboard/element",
        disabled: false,
      },
      {
        name: "Balances",
        icon: "",
        key: "#",
        disabled: true,
      },
    ],
  },
  {
    name: "Employees",
    icon: <FaUsers />,
    key: "/employees",
    disabled: true,
  },

  // Add more first sidebar items as needed
];

export const bottomSideBarItems = [
  {
    name: "Payroll Settings",
    icon: <MdSettings />,
    key: "#",
    disabled: true,
    items: [
      {
        name: "Overview",
        icon: "",
        key: "/payroll_settings/overview",
        disabled: true,
      },
    ],
  },
  {
    name: "My Account",
    icon: <FaUser />,
    key: "/account",
    disabled: true,
  },

  {
    name: "Logout",
    icon: <MdOutlineLogout />,
    key: "#",
    disabled: true,
  },

  // Add more first sidebar items as needed
];
