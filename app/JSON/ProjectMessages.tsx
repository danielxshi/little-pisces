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
  { day: "SUNDAY", hours: "12PM - 11PM" },
];

const TaiyakiPrices = [{ price: "2pc / 6.7" }, { price: "5pc / 14.7" }];
const SoftservePrices = [{ price: "7.9 / cup" }, { price: "8.9 / cone" }];

const StoreInfo = [
  { content: "4501 North Rd, Unit 202B, Burnaby, BC" },
  { content: "8531 Alexandra Rd, Unit 128, Richmond, BC" },
];

const ContactInfo = [{ content: "jacky@littlepisces.com" }];

const LougheedTaiyaki = [
  { name: "Red Bean", image: "red bean.svg" },
  { name: "Custard", image: "custard.svg" },
  { name: "Nutella", image: "nutella.svg" },
  { name: "Hotteok", image: "hotteok.svg" },
  { name: "Matcha Strawberry", image: "matcha strawberry.svg" },
  { name: "Ube", image: "ube.svg" },
  { name: "Lemon Tart", image: "lemon tart.svg" },
  { name: "Pizza", image: "pizza.svg" },
];

const LougheedSoftServe = [
  { name: "Matcha", image: "matcha SS.svg" },
  { name: "Mango Sorbet", image: "mango sorbet SS.svg" },
  { name: "Black Sesame", image: "blk sesame SS.svg" },
  { name: "Matcha / Mango Twist", image: "matcha mango SS.svg" },
];

const LougheedDrinks = [
  { name: "Hojicha Tea", price: "4.0", image: "hojicha tea.svg" },
  { name: "Passionfruit Green Tea", price: "5.0", image: "passion fruit green tea drink.svg" },
  { name: "Matcha Lemonade", price: "6.5", image: "matcha lemonade drink.svg" },
  { name: "Matcha Latte", price: "6.5", image: "matcha latte.svg" },
  { name: "Hojicha Latte", price: "6.5", image: "hojicha latte.svg" },
  { name: "Matcha Strawberry Latte", price: "7.5", image: "matcha strawberry latte.svg" },
  { name: "Brown Sugar Matcha Latte", price: "7.5", image: "brown sugar matcha latte.svg" },
  { name: "Black Sesame Hojicha Einspanner", price: "8.0", image: "black sesame hojicha einspanner.svg" },
];

const RichmondTaiyaki = [
  { name: "Red Bean", image: "red bean.svg" },
  { name: "Custard", image: "custard.svg" },
  { name: "Nutella", image: "nutella.svg" },
  { name: "Pizza", image: "pizza.svg" },
];

const RichmondSoftServe = [
  { name: "Matcha", image: "matcha SS.svg" },
  { name: "Mango Sorbet", image: "mango sorbet SS.svg" },
  { name: "Black Sesame", image: "blk sesame SS.svg" },
  { name: "Matcha / Mango Twist", image: "matcha mango SS.svg" },
];

const RichmondDrinks = [
  { name: "Hojicha Tea", price: "4.0", image: "hojicha tea.svg" },
  { name: "Passionfruit Green Tea", price: "5.0", image: "passion fruit green tea drink.svg" },
  { name: "Matcha Lemonade", price: "6.5", image: "matcha lemonade drink.svg" },
  { name: "Matcha Latte", price: "6.5", image: "matcha latte.svg" },
  { name: "Hojicha Latte", price: "6.5", image: "hojicha latte.svg" },
  { name: "Matcha Strawberry Latte", price: "7.5", image: "matcha strawberry latte.svg" },
];

const ProjectMessages = {
  OperationHours: OperationHours,
  StoreInfo: StoreInfo,
  SocialMedia: SocialMedia,
  ContactInfo: ContactInfo,
  LougheedTaiyaki: LougheedTaiyaki,
  LougheedSoftServe: LougheedSoftServe,
  LougheedDrinks: LougheedDrinks,
  RichmondTaiyaki: RichmondTaiyaki,
  RichmondSoftServe: RichmondSoftServe,
  RichmondDrinks: RichmondDrinks,
  TaiyakiPrices: TaiyakiPrices,
  SoftservePrices: SoftservePrices,
};

export default ProjectMessages;
