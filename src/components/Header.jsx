import React, { useState } from "react";
import logo from "../assets/Disney+.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";


  const menu = [
    {
      name: "HOME",
      icon: HiHome,
      path: "/"
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
      path:"/search"
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
      path:"/watchlist"
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
      path:"/originals"
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
      path:"/movies"
    },
    {
      name: "SERIES",
      icon: HiTv,
      path:"/series"
    },
  ];
  const Header = ({ dark }) => {
    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
      setToggle(!toggle);
    };

  const gradientStyle = {
    background: `linear-gradient(to bottom, rgb(5, 6, 20), rgba(5, 6, 20, 0.452))`,
  };
  const darkStyle = {
    background: `linear-gradient(to bottom, rgb(5, 6, 20), rgba(5, 6, 20, 0.800))`,
  };
  let Navcolor = dark ? darkStyle : gradientStyle;

  return (
    <div
      className="flex items-center justify-between px-5 absolute top-0 z-50 w-full"
      style={Navcolor}
    >
      <div className="flex  items-center gap-8 ">
        <img
          src={logo}
          alt="logo"
          className="w-[80px] md:w-[115px] object-cover"
        />
        <div className=" hidden md:flex gap-8">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} path={item.path}/>
          ))}
        </div>
        <div className="flex gap-5 md:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} />
          )}
          <div className="md:hidden" onClick={handleToggle}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute mt-3 bg-[#0E162A] border-[1px] border-gray-700 p-3 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        key={index}
                        name={item.name}
                        Icon={item.icon}
                        path={item.path}
                      />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <img
        src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1687356525~exp=1687357125~hmac=763617764ec3a4d360371377c4cb1368fe2813c8ce2dcc1729640872b69f5929"
        alt=""
        className="w-[30px] h-[30px] md:w-[40px] md:h-[40px]
        rounded-full object-cover cursor-pointer"
      />
    </div>
  );
};

export default Header;
