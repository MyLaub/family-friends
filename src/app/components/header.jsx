import React from "react";
import { AiOutlineBell } from "react-icons/ai";

const Header = () => {
  return (
    <header className="flex justify-between p-2">
    
      
        <a className="font-extrabold text-2xl" href="/">FamilyFriends </a>
      
      <AiOutlineBell size={30} />
    </header>
  );
};

export default Header;
