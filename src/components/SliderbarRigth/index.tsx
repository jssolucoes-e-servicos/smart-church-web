// components/SliderRight.js
import { useState } from "react";
import CustomerColor from "../CustomerColor";
interface SidebarRigthProps {
  sidebarRigthOpen: boolean;
  setSidebarRigthOpen: (arg: boolean) => void;
}

const SliderRight = ({
  sidebarRigthOpen,
  setSidebarRigthOpen,
}: SidebarRigthProps) => {
  const handleToggleSlider = () => {
    setSidebarRigthOpen(!sidebarRigthOpen);
  };

  return (
    <div
      className={`fixed z-99999 justify-end top-0 right-0 h-screen w-full bg-bgtransparent  transition-transform ease-in-out duration-300 ${
        sidebarRigthOpen
          ? "transform translate-x-0"
          : "transform translate-x-full"
      }`}
    >
      {/* Conteúdo do slider aqui */}
      <div
        className={`fixed top-0 right-0 h-screen w-73 bg-boxdark  transition-transform ease-in-out duration-300 ${
          sidebarRigthOpen
            ? "transform translate-x-0"
            : "transform translate-x-full"
        }`}
      >
        <div className="h-24 bg-roxoseila flex items-center justify-between">
          <div className="h-24  flex items-center px-4 py-2">
            <h1 className="text-white text-lg font-medium">Settings</h1>
          </div>
          <div className="h-24  flex items-center px-6 py-2">
            <button
              className="relative   bg-gray-800 text-white text-lg font-medium border-none cursor-pointer"
              onClick={handleToggleSlider}
            >
              x
            </button>
          </div>
        </div>

        <CustomerColor />
      </div>
    </div>
  );
};

export default SliderRight;
