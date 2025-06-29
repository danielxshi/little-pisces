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
  { name: "Pistachio (+0.5)", image: "pistachio.svg" },
  { name: "Pizza", image: "pizza.svg" },
];

const LougheedSoftServe = [
  { name: "Matcha", image: "matcha SS.svg" },
  { name: "Guava Sorbet", image: "guava sorbet.svg" },
  { name: "Ube", image: "ube SS.svg" },
  { name: "Mango Sticky Rice (+0.5)", image: "mango sticky rice ss.svg" },
  { name: "Matcha / Guava Twist", image: "matcha guava SS.svg" },
  { name: "Ube / Mango Sticky Rice (+0.5)", image: "ube and mango sticky rice ss.svg" },
];

const LougheedDrinks = [
  { name: "Hojicha Tea", price: "4.0", image: "hojicha tea.svg" },
  { name: "Passionfruit Green Tea", price: "5.5", image: "passion fruit green tea drink.svg" },
  { name: "Maesil-ade", price: "6.5", image: "maesil-ade.svg" },
  { name: "Lychee Mojito", price: "8.0", image: "lychee mojito.svg" },
  { name: "Matcha Latte", price: "6.5", image: "matcha latte.svg" },
  { name: "Hojicha Latte", price: "6.5", image: "hojicha latte.svg" },
  { name: "Matcha Strawberry Latte", price: "7.5", image: "matcha strawberry latte.svg" },
  { name: "Matcha Mango Latte", price: "8.0", image: "matcha mango latte.svg" },
];

const RichmondTaiyaki = [
  { name: "Red Bean", image: "red bean.svg" },
  { name: "Custard", image: "custard.svg" },
  { name: "Nutella", image: "nutella.svg" },
  { name: "Black Sesame", image: "black sesame taiyaki.svg" },
  { name: "Matcha Strawberry", image: "matcha strawberry.svg" },
  { name: "Lemon Tart", image: "lemon tart.svg" },
  { name: "Salted Egg Yolk (+0.5)", image: "salted egg yolk.svg" },
  { name: "Pistachio (+0.5)", image: "pistachio.svg" },
];

const RichmondSoftServe = [
  { name: "Matcha", image: "matcha SS.svg" },
  { name: "Banana Milk", image: "banana milk SS.svg" },
  { name: "Milk", image: "milk SS.svg" },
  { name: "HK Lemon Tea", image: "hk lemon tea ss.svg" },
  { name: "Matcha / Banana Milk", image: "matcha banana SS.svg" },
  { name: "Milk / HK Lemon Tea", image: "milk and hk lemon tea ss.svg" },
];

const RichmondDrinks = [
  { name: "Jasmine Green Tea", price: "4.5", image: "jasmine tea.svg" },
  { name: "Grape Jasmine Tea", price: "7.5", image: "grape jasmine tea.svg" },
  { name: "Matcha Latte", price: "6.5", image: "matcha latte.svg" },
  { name: "Hojicha Latte", price: "6.5", image: "hojicha latte.svg" },
  { name: "Matcha Strawberry Latte", price: "7.5", image: "matcha strawberry latte.svg" },
  { name: "Matcha Mango Latte", price: "8.0", image: "matcha mango latte.svg" },
  { name: "Strawberry Milk", price: "6.5", image: "strawberry milk.svg" },
  { name: "Mango Milk", price: "7.0", image: "mango milk.svg" },
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
