import { FiFileText, FiDollarSign, FiSettings, FiShoppingCart, FiUser, FiShoppingBag, FiList, FiEye, FiClock, FiHeart, FiStar } from "react-icons/fi";

export const roleBasedMenus = {
  admin: [
    {
      path: "/admin/dashboard",
      label: "Dashboard",
      icon: <FiFileText />,
    },
   
    {
      path: "/admin/landing-page",
      label: "Manage pages",
      icon: <FiShoppingBag />,
    },
    {
      path: "/admin/projects",
      label: "Manage projects",
      icon: <FiShoppingBag />,
    },
    {
      path: "/admin/blogs",
      label: "Manage Blogs",
      icon: <FiShoppingBag />,
    },
   
    {
      path: "/admin/profile",
      label: "My Profile",
      icon: <FiSettings />,
      description: "Platform configurations and preferences.",
    },
  ],
  
};
