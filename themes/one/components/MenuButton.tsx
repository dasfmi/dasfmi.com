"use client";
import { MenuIcon, XIcon } from "lucide-react";

export function MenuButton() {
  const openMenu = () => {
    const menu = document.querySelector(".menu");
    menu?.classList.toggle("hidden");
    menu?.classList.toggle("flex");
  };

  return (
    <MenuIcon className="lg:hidden text-gray-400 size-6" onClick={openMenu} />
  );
}

export function CloseMenuButton() {
  const openMenu = () => {
    const menu = document.querySelector(".menu");
    menu?.classList.toggle("hidden");
    menu?.classList.toggle("flex");
  };

  return (
    <XIcon className="lg:hidden text-gray-400 size-6 mr-4" onClick={openMenu} />
  );
}
