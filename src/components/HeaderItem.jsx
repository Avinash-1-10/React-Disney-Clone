import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderItem = ({ name, Icon, path }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div
      className="text-white flex items-center gap-3 text-[20px] md:text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8"
      onClick={handleClick}
    >
      <Icon />
      <span className="text-[15px] md:text-[15px] py-2">{name}</span>
    </div>
  );
};

export default HeaderItem;

