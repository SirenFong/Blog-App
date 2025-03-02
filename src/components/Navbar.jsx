import { useState } from "react";
// import { IKImage } from "imagekitio-react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* LOGO */}
      <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="Hakate" w={64} h={64} p={8} />
        <span className="">Blog Thanh và Su</span>
      </Link>

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
          className={`w-full h-screen flex flex-col items-center gap-8 font-medium text-lg justify-center absolute top-16 bg-[#e6e6ff] transition-all ease-in-out ${
            open ? "right-0" : "-right-full"
          }`}
        >
          <Link to="/">Trang chủ</Link>
          <Link to="/">Nổi bật</Link>
          <Link to="/">Nhiều lượt xem</Link>
          <Link to="/">About</Link>
          <Link to="/">
            <button className="py-2 px-4 rounded-3xl bg-green-800 text-white">
              Đăng nhập 👋
            </button>
          </Link>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to="/">Trang chủ</Link>
        <Link to="/">Nổi bật</Link>
        <Link to="/">Nhiều lượt xem</Link>
        <Link to="/">About</Link>
        
        <SignedOut>
        <Link to="/login">
          <button className="py-2 px-4 rounded-3xl bg-green-800 text-white">
            Đăng nhập 👋
          </button>
        </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
