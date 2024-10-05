import { FiGrid } from "react-icons/fi";
import { RxMoon } from "react-icons/rx";
import { useState } from "react";
//defining prop interface for darkMode
interface NavbarProps {
  nightMode: () => void;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  //just the component for the top of the main page

  //state to open the hamburger menu
  const [isOpen, setIsOpen] = useState(false);
  //state

  function handleClick() {
    setIsOpen((prevOpen) => !prevOpen);
  }

  return (
    <nav className="flex p-7 gap-4 items-center">
      <img className="mr-auto" src="" alt="" />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        className="fill-[#fff] cursor-pointer z-50"
        onClick={props.nightMode}
      >
        <path d="M12 11.807A9.002 9.002 0 0 1 10.049 2a9.942 9.942 0 0 0-5.12 2.735c-3.905 3.905-3.905 10.237 0 14.142 3.906 3.906 10.237 3.905 14.143 0a9.946 9.946 0 0 0 2.735-5.119A9.003 9.003 0 0 1 12 11.807z"></path>
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        className="fill-[#fff] cursor-pointer z-50"
        onClick={handleClick}
      >
        <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"></path>
      </svg>

      <div
        className={`w-full max-w-[450px] h-screen absolute right-0 bottom-0 p-12 bg-black transition-all duration-700 ease-in-out transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <ul className="text-white cursor-pointer">
          <li className="mb-4">Projects</li>
          <li className="mb-4">About Me</li>
          <li className="mb-4">*&%*#&^</li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
