import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
// import BananaMilkSS from "/images/menu-icons/bananamilkSS.svg";

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

const TaiyakiPrices = [{ price: "2pc / 6.7" }, { price: "5pc / 14.7" }];
const SoftservePrices = [{ price: "7.9 / cup" }, { price: "8.9 / cone" }];

const StoreInfo = [
  { content: "4501 North Rd, Unit 202B" },
  { content: "Burnaby, BC V3N 4R7" },
];

const ContactInfo = [{ content: "jacky@littlepisces.com" }];

const MenuTaiyaki = [
  { name: "Red Bean", image: "red bean.svg" },
  { name: "Custard", image: "custard.svg" },
  { name: "Nutella", image: "nutella.svg" },
  { name: "Taro", image: "taro.svg" },
  { name: "Hotteok", image: "hotteok.svg" },
  { name: "Matcha Custard", image: "matcha custard.svg" },
  { name: "Black Sesame", image: "black sesame taiyaki.svg" },
  { name: "Pizza", image: "pizza.svg" },
];

const MenuSoftServe = [
  { name: "Matcha", image: "matcha SS.svg" },
  { name: "Mango Sorbet", image: "mango sorbet SS.svg" },
  { name: "Banana Milk", image: "banana milk SS.svg" },
  { name: "Coffee", image: "coffee SS.svg" },
  { name: "Matcha / Mango Twist", image: "matcha mango SS.svg" },
  { name: "Banana Milk / Coffee Twist", image: "banana coffee SS.svg" },
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
  { name: "Hojicha Tea", price: "4.0", image: "hojicha tea.svg" },
  { name: "Passionfruit Green Tea", price: "5.0", image: "passion fruit green tea drink.svg" },
  { name: "Taro Milk", price: "6.5", image: "taro milk.svg" },
  { name: "Matcha Latte", price: "6.5", image: "matcha latte.svg" },
  { name: "Matcha Strawberry Latte", price: "7.5", image: "matcha strawberry latte.svg" },
  { name: "Hojicha Latte", price: "6.5", image: "hojicha latte.svg" },
  { name: "Hojicha Taro Latte", price: "7.5", image: "hojicha taro latte.svg" },
  { name: "Milo Hot Chocolate", price: "6.0", image: "cold brew.svg" },
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
  TaiyakiPrices: TaiyakiPrices,
  SoftservePrices: SoftservePrices,
};

export default ProjectMessages;
