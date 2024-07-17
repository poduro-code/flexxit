import React from "react";

interface MobileMenuProps {
  visible?: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div
      className="bg-black w-56 absolute top-8 left-0 py-5 flex-col border-2 border-gray-800 flex"
      aria-label="Mobile Menu"
    >
      <ul className="flex flex-col gap-4">
        <li className="px-3 text-center text-white hover:underline cursor-pointer">
          Home
        </li>
        <li className="px-3 text-center text-white hover:underline cursor-pointer">
          Series
        </li>
        <li className="px-3 text-center text-white hover:underline cursor-pointer">
          Films
        </li>
        <li className="px-3 text-center text-white hover:underline cursor-pointer">
          New & Popular
        </li>
        <li className="px-3 text-center text-white hover:underline cursor-pointer">
          My List
        </li>
        <li className="px-3 text-center text-white hover:underline cursor-pointer">
          Browse By Languages
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
