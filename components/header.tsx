import Image from "next/image";
import React, { useState } from "react";
import Logo from "../assets/images/Logo.png";
import { BsChevronDown, BsBell, BsStar, BsChatRightDots } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

function Header(): JSX.Element {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="px-10">
      <div className="flex items-center justify-between w-full max-w-[1160px] mx-auto">
        <div>
          <Image src={Logo} width={140} alt="logo" />
        </div>
        <div className="hidden lg:flex items-center justify-center gap-8">
          <a href="/search">
            <div className="flex items-center gap-2">
              <span>Search</span> <BsChevronDown size={14} />
            </div>
          </a>
          <a href="/news-and-guides">News & Guides</a>
          <button className="bg-[#EF2C2E] text-white px-10 py-2 rounded-[5px] text-[16px] font-medium">
            Sell
          </button>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-6">
          <a href="#">
            <div className="flex items-center gap-1">
              <span>
                <BsBell size={20} />
              </span>
              <BsChevronDown size={14} />
            </div>
          </a>
          <a href="#">
            <BsStar size={22} className="mr-2" />
          </a>
          <a href="#">
            <BsChatRightDots size={22} className="mr-2" />
          </a>
          <button className="bg-[#003087] text-white px-10 py-2 rounded-[5px] text-[16px] font-medium">
            Login
          </button>
        </div>

        {/* Hamburger Icon to Toggle Mobile Menu */}
        <div className="lg:hidden" onClick={toggleMobileMenu}>
          <RxHamburgerMenu size={26} />
        </div>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-[250px] text-white bg-[#212020] z-50 transform ${
          !isMobileMenuOpen ? "translate-x-full" : ""
        } transition-transform ease-in-out duration-300`}
      >
        <div className="flex flex-col items-end p-4 space-y-4 px-10 pt-8">
          <AiOutlineClose size={24} onClick={toggleMobileMenu} />
        </div>
        <div className="flex flex-col h-full items-start p-4 space-y-4">
          <a href="/search">Search</a>
          <a href="/news-and-guides">News & Guides</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
