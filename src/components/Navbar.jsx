"use client";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setUser, clearUser } from "@/app/store/userSlice";
import { logout } from "./Auth/Logout";
import AuthModal from "./Auth/AuthModal";

const Navbar = () => {
  const dispatchUser = useDispatch();
  const [userData, setUserData] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const userDataCookie = Cookies.get("userData");
    if (userDataCookie) {
      try {
        const parsedUserData = JSON.parse(userDataCookie);
        dispatchUser(setUser(parsedUserData));
        setUserData(parsedUserData);
      } catch (error) {
        console.error("Failed to parse userData cookie:", error);
      }
    }
  }, [dispatchUser]);

  const handleLogout = () => {
    logout(dispatchUser);
    setUserData(null);
    console.log("Reload test");
    window.location.reload();
  };

  return (
    <div>
      <nav className="bg-white border-gray-200">
        <div className="max-w-[1600px] px-4 flex flex-wrap py-8 items-center justify-between mx-auto">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://www.famewheels.com/static/media/fame-wheels-logo.bdbcd17588780f149f99.png"
              className="h-10"
              alt="Famewheels logo"
            />
          </a>
          <h2>{userData?.name}</h2>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              <li>
                <Sheet>
                  <SheetTrigger asChild>
                    <button className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                      </svg>
                    </button>
                  </SheetTrigger>
                  <SheetContent>
                    <CartItem />
                  </SheetContent>
                </Sheet>
              </li>
              {userData ? (
                <li className="flex justify-center items-center text-[20px]">
                  <button onClick={handleLogout} className="">
                    Log out
                  </button>
                </li>
              ) : (
                <li className="flex justify-center items-center text-[20px]">
                  <button onClick={() => setOpen(true)} className="">
                    Log in
                  </button>
                </li>
              )}
              <AuthModal isOpen={open} onClose={()=>setOpen(false)}/>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
