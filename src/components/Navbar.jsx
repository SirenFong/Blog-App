import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src="/logo.png" className="w-32 h-32 p-8" alt="" />
        <span className="">Blog Thanh và Su</span>
      </div>

      {/* MOBILE TOGGLE AND MENU */}
      <div className="md:hidden flex items-center">
        <div
          className="cursor-pointer text-4xl"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "="}
        </div>
        {/* MOBILE LINK LIST */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-red-700 transition-all ease-in-out ${
            open ? "right-0" : "-right-[100%]"
          }`}
        >
          menu
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <a href="/">Trang chủ</a>
        <a href="/">Nổi bật</a>
        <a href="/">Nhiều lượt xem</a>
        <a href="/">About</a>
        <a href="/">
          <button className="py-2 px-4 rounded-3xl bg-green-800 text-white">
            Login 👋
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
