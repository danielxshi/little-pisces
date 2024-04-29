import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const SocialMedia = [
  // { icon: "LOGO", url: "", name: "WECHAT" },
  // { icon: "LOGO", url: "", name: "TWITTER" },
  { icon: <FaInstagram />, url: "https://www.instagram.com/eatlittlepisces/", name: "INSTAGRAM" },
  { icon: <FaTiktok />, url: "https://www.tiktok.com/@eatlittlepisces", name: "TIKTOK" },
  // { icon: "LOGO", url: "", name: "LITTLE RED BOOK" },
];

const OperationHours = [
  { day: "MONDAY", hours: "12PM - 10PM" },
  { day: "TUESDAY", hours: "12PM - 10PM" },
  { day: "WEDNESDAY", hours: "12PM - 10PM" },
  { day: "THURSDAY", hours: "12PM -10PM" },
  { day: "FRIDAY", hours: "12PM - 12AM" },
  { day: "SATURDAY", hours: "12PM - 12AM" },
  { day: "SUNDAY", hours: "12PM - 12AM" },
];

const StoreInfo = [
  { content: "Burnaby, BC V3N 4R7" },
  { content: "4501 North Rd, Unit 202B" },
];

const ContactInfo = [{ content: "jacky@littlepisces.com" }];

const MenuTaiyaki = [
  { name: "Red Bean", price: "$7.00" },
  { name: "Custard", price: "$7.00" },
  { name: "Nutella", price: "$7.00" },
  { name: "Taro", price: "$7.00" },
  { name: "Ube Halaya", price: "$7.00" },
  { name: "Salted Egg Yolk", price: "$7.00" },
  { name: "Hotteok", price: "$7.00" },
  { name: "Pizza", price: "$7.00" },
];

const MenuSoftServe = [
  { name: "Vanilla", price: "$7.00" },
  { name: "Ube", price: "$7.00" },
  { name: "Matcha", price: "$7.00" },
  { name: "Black Sesame", price: "$7.00" },
];

const MenuTaiyakiSoftServe = [
  { name: "Red Bean", price: "$7.00" },
  { name: "Custard", price: "$7.00" },
  { name: "Nutella", price: "$7.00" },
  { name: "Taro", price: "$7.00" },
  { name: "Ube Halaya", price: "$7.00" },
  { name: "Salted Egg Yolk", price: "$7.00" },
  { name: "Hotteok", price: "$7.00" },
  { name: "Pizza", price: "$7.00" },
];

const MenuDrinks = [
  { name: "Yuzu Green Tea Lemonade", price: "$7.00" },
  { name: "Hojicha Sweet Foam Latte", price: "$7.00" },
];

const ProjectMessages = {
  OperationHours: OperationHours,
  StoreInfo: StoreInfo,
  SocialMedia: SocialMedia,
  ContactInfo: ContactInfo,
  MenuTaiyaki: MenuTaiyaki,
  MenuSoftServe: MenuSoftServe,
  MenuTaiyakiSoftServe: MenuTaiyakiSoftServe,
  MenuDrinks: MenuDrinks,
};

export default ProjectMessages;
