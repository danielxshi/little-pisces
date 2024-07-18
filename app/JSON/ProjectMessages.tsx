import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const SocialMedia = [
  // { icon: "LOGO", url: "", name: "WECHAT" },
  // { icon: "LOGO", url: "", name: "TWITTER" },
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/eatlittlepisces/",
    name: "INSTAGRAM",
  },
  {
    icon: <FaTiktok />,
    url: "https://www.tiktok.com/@eatlittlepisces",
    name: "TIKTOK",
  },
  // { icon: "LOGO", url: "", name: "LITTLE RED BOOK" },
];

const OperationHours = [
  { day: "MONDAY", hours: "12PM - 11PM" },
  { day: "TUESDAY", hours: "12PM - 11PM" },
  { day: "WEDNESDAY", hours: "12PM - 11PM" },
  { day: "THURSDAY", hours: "12PM - 11PM" },
  { day: "FRIDAY", hours: "12PM - 12AM" },
  { day: "SATURDAY", hours: "12PM - 12AM" },
  { day: "SUNDAY", hours: "12PM - 12AM" },
];

const StoreInfo = [
  { content: "4501 North Rd, Unit 202B" },
  { content: "Burnaby, BC V3N 4R7" },
];

const ContactInfo = [{ content: "jacky@littlepisces.com" }];

const MenuTaiyaki = [
  { name: "Red Bean", price: "", },
  { name: "Custard", price: "" },
  { name: "Nutella", price: "" },
  { name: "Ube", price: "" },
  { name: "Hotteok", price: "" },
  { name: "Matcha Strawberry", price: "" },
  { name: "Pizza", price: "" },
  // { name: "Taro", price: "" },
];

const MenuSoftServe = [
  { name: "Matcha", price: "" },
  { name: "Banana Milk", price: "" },
  { name: "Milk", price: "" },
  { name: "Guava Sorbet", price: "" },
];

const MenuTaiyakiSoftServe = [
  { name: "Red Bean", price: "" },
  { name: "Custard", price: "" },
  { name: "Nutella", price: "" },
  { name: "Taro", price: "" },
  { name: "Ube Halaya", price: "" },
  { name: "Salted Egg Yolk", price: "" },
  { name: "Hotteok", price: "" },
  { name: "Pizza", price: "" },
];

const MenuDrinks = [
  { name: "Mango Milk", price: "6.5", },
  { name: "Strawberry Milk", price: "6.5" },
  { name: "Matcha Latte", price: "6.5" },
  { name: "Matcha Mango Latte", price: "7.5" },
  { name: "Matcha Strawberry Latte", price: "7.5" },
  { name: "Cold Brew", price: "5.0" },
  { name: "Hojicha Tea", price: "4.0" },
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
