"use client";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import { useState } from "react";
import MenuItem from "./MenuItem";
import useRegisterModal from "@/app/hooks/useRegisterModal";

const UserMenu = () => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((value) => !value);
  return (
    <div className="relative">
      <div className="flex flex-1 items-center gap-3">
        <div className="hidden md:block text-sm font-semibold py-3 px-4 rounden-full hover:bg-natural-100 cursor-pointer transition">
          NextBnB your home
        </div>
        <div
          onClick={toggleMenu}
          className="p-4
                md:py-1
                md:px-2
                border-[1px] 
                border-neutral-200 
                flex 
                flex-row 
                items-center 
                gap-3 
                rounded-full 
                cursor-pointer 
                hover:shadow-md 
                transition"
        >
          <AiOutlineMenu />
        </div>

        <div className="hidden md:block">
          <Avatar />
        </div>
      </div>
      {isOpen && (
        <div
          className="
                absolute 
                rounded-xl 
                shadow-md
                w-[40vw]
                md:w-3/4 
                bg-white 
                overflow-hidden 
                right-0 
                top-12 
                text-sm
              "
        >
          <div className="flex flex-col cursor-pointer">
            <MenuItem label="Login" onClick={() => {}} />
            <MenuItem label="Sign up" onClick={registerModal.onOpen} />
          </div>
        </div>
      )}
    </div>
  );
};
export default UserMenu;
