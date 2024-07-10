import { ReactElement } from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaHeadphones } from "react-icons/fa6";
import { PiShieldCheckBold } from "react-icons/pi";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
export const TAPS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export type AboutTipType = {
  icon: React.ComponentType<any>; // Assuming TbTruckDelivery is a valid React component
  title: string;
  brief: string;
};
export const ABOUT_TIPS: AboutTipType[] = [
  {
    icon: TbTruckDelivery,
    title: "FREE AND FAST DELIVERY",
    brief: "Free delivery for all orders over 140 EGP",
  },
  {
    icon: FaHeadphones,
    title: "24/7 CUSTOMER SERVICE WORKER",
    brief: "friendly 24/7 customer support",
  },
  {
    icon: PiShieldCheckBold,
    title: "MONEY BACK GUARANTEE",
    brief: "We return money within 3 days",
  },
];
export const CART_HEADER = ["", "Product", "Price", "Quantity", "Subtotal", ""];
export type ProductType = {
  image: string; // Assuming TbTruckDelivery is a valid React component
  name: string;
  price: string;
};
export const PRODUCTS: Array<any> = [
  { image: "/images/Products/2.png", name: "H1 Gamepad", price: "550 EGP" },
];

export const PROFILE_TAP = [
  {
    title: "Dashboard",
    icon: LuLayoutDashboard,
  },
  {
    title: "Addresses",
    icon: IoLocationOutline,
  },
  {
    title: "Logout",
    icon: IoIosLogOut,
  },
];
