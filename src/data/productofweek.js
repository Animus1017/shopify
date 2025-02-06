import faxtex from "../assets/productofweek/ipadgreen.png";
import printer from "../assets/productofweek/printer.png";
import ipadlap from "../assets/productofweek/iapdlap_15d8435c-e601-44c4-9b8b.png";
import apptab from "../assets/productofweek/apptablet_a5640c96-4b53-4c9c-b48.png";
import phone from "../assets/productofweek/lgphone.png";
import iphone from "../assets/productofweek/bluePhone_a39e84fa-4375-49b0-922.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LiaCartArrowDownSolid } from "react-icons/lia";
export const ProductWeekData = [
  {
    discount: 45,
    img: faxtex,
    company: "Bulgari",
    productName: "Faxtex Product Sample",
    productDescription: ["Accept SIM card and call", "Take photos..."],
    salePrice: "110.00",
    mrp: "199.00",
    button: <FaLongArrowAltRight />,
  },
  {
    discount: 21,
    img: printer,
    company: "Christan Dior",
    productName: "Finity Product Sample",
    productDescription: ["Accept SIM card and call", "Take photos..."],
    salePrice: "95.00",
    mrp: "120.00",
    button: <FaLongArrowAltRight />,
  },
  {
    discount: undefined,
    img: ipadlap,
    company: "Dolce & Gabbana",
    productName: "Fixair Product Sample",
    productDescription: ["4.5 inch HD Screen", "Android 4.4 KitKat OS..."],
    salePrice: "210.00",
    mrp: undefined,
    button: <FaLongArrowAltRight />,
  },
  {
    discount: undefined,
    img: apptab,
    company: "Donna Karan",
    productName: "Freecof Product Sample",
    productDescription: [
      "Incredibly sharp picture and zoom",
      "Built-in ND filter...",
    ],
    salePrice: "450.00",
    mrp: undefined,
    button: <LiaCartArrowDownSolid className="text-2xl" />,
  },
  {
    discount: 20,
    img: phone,
    company: "Armani",
    productName: "Freshkix Product Sample",
    productDescription: [
      "Super-Silent cube gaming case solidly built with 0.8mm SGCC to block out most of the noise...",
    ],
    salePrice: "120.00",
    mrp: "150.00",
    button: <LiaCartArrowDownSolid className="text-2xl" />,
  },
  {
    discount: undefined,
    img: iphone,
    company: "Bulgari",
    productName: "Gorgeous White Bad",
    productDescription: [
      "High-fidelity stereo music and clear speech",
      "100% Stable and Comfortable when exercising,...",
    ],
    salePrice: undefined,
    mrp: undefined,
    button: undefined,
  },
];
