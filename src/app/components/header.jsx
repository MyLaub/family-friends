import React from "react";
import { AiOutlineBell } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex justify-between">
      <h1
      className="font-extrabold text-2xl">
        <a href="/">FamilyFriends </a>
      </h1>
      <AiOutlineBell size={30} />
    </header>
  );
};

export default Header;
