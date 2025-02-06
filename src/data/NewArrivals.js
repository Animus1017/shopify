import speaker from "../assets/newarrivals/WirelessSound.png";
import headphones from "../assets/newarrivals/1.png";
import watch from "../assets/newarrivals/watchsmart.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { LiaCartArrowDownSolid } from "react-icons/lia";
export const NewArrivals = [
  {
    discount: undefined,
    new: true,
    img: speaker,
    tagLine: "Ready for 2025",
    company: "Christian Dior",
    productName: "Coneco Product Sample",
    productDescription: [
      "360 Omnidirectional Sound",
      "Easy Intuitive Control",
      "Multiroom App",
    ],
    salePrice: "310.00",
    mrp: undefined,
    button: <FaLongArrowAltRight />,
  },
  {
    discount: 10,
    new: false,
    img: headphones,
    tagLine: "Beautifuly Uncomplicated",
    company: "Givenchy",
    productName: "Dentoex Product Sample",
    productDescription: [
      "Pair and Play with your Bluetooth® device with 30' range",
      "12 hour rechargeable battery with Fuel Gauge",
      "Take hands-free calls with built-in mic*",
      "Fine-tuned acoustics for clarity, breadth and balance",
    ],
    salePrice: "450.00",
    mrp: "499.00",
    button: <LiaCartArrowDownSolid className="text-2xl" />,
  },
  {
    discount: undefined,
    new: false,
    img: watch,
    tagLine: "Ride Into a Better Future",
    company: "Dolce & Gabbana",
    productName: "Gold Diamond Chain",
    productDescription: [
      "Play online with your friends, get free games, save games online and more with PlayStation",
      "Cutting edge graphics bring game worlds to life like never before, and next gen",
      "Connect with your friends to broadcast and celebrate your epic moments",
      "Perfect for both new players and players new to PS4",
    ],
    salePrice: "399.00",
    mrp: undefined,
    button: <FaLongArrowAltRight />,
  },
];
