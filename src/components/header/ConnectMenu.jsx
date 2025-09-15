import { FaHeadphones, FaChevronDown } from "react-icons/fa";

const ConnectMenu = ()=> {
  return (
    <button className="flex items-center gap-1 text-blue-900 cursor-pointer text-sm">
      <FaHeadphones size={16} />
      <span className="font-bold">Connect with us</span>
      <FaChevronDown size={16} />
    </button>
  );
};
export default ConnectMenu;


