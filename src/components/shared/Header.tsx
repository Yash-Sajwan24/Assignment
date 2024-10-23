import React from "react";
import { useNavigate } from "react-router-dom";
interface HeaderProps {
  isHome: boolean;
}

const Header: React.FC<HeaderProps> = ({ isHome }) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-between text-white sm:px-10 my-5">
      <div className="text-[2rem] font-semibold">Movie App</div>
      <div className="mx-2 flex ">
        <button
          className="bg-blue-500 text-white sm:px-10 py-2 w-40 sm:w-52 rounded hover:bg-blue-700 font-semibold"
          onClick={() => (isHome ? navigate("/history") : navigate("/"))}
        >
          {isHome ? "History" : "Back to Search"}
        </button>
      </div>
    </div>
  );
};

export default Header;
