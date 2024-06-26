"use client";
import React, { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartItem from "./CartItem";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";
import { setUser, clearUser } from "@/app/store/userSlice";
import { logout } from "./Auth/logout";
import AuthModal from "./Auth/AuthModal";
import Logo from "@/assets/logo-white.png";
import Logo2 from "@/assets/famewheels.color.png";
import Image from "next/image";
import {
  Menubar,
  MenubarContent,
  MenubarMenu,
  MenubarSub,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import MakeModal from "./MakeModal";
import Link from "next/link";

const Navbar = () => {
  const dispatchUser = useDispatch();
  const [userData, setUserData] = useState();
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
    window.location.reload();
  };

  return (
    <>
      <div className="bg-white shadow-md">
        <nav className="max-w-[1600px] px-4 py-5  lg:mb-[-90px] flex flex-wrap items-center justify-between mx-auto">
          <Link href="/MainPage" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image src={Logo} className="h-10 w-full hidden lg:block" alt="Famewheels logo" />
            <Image src={Logo2} className="h-10 w-full block lg:hidden" alt="Famewheels logo" />
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
            onClick={() => setMenuOpen(!menuOpen)}
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
          <div className={`w-full md:flex md:w-auto ${menuOpen ? "block" : "hidden"}`} id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li className="flex justify-center items-center">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-8 w-8 hidden lg:block text-black lg:text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    </MenubarTrigger>
                    <MenubarContent>
                      <MenubarSub>
                        <ul>
                          <li className="p-4">
                            <Dialog>
                              <DialogTrigger asChild>
                                <button variant="outline" className="text-[18px]">
                                  Categories
                                </button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                Test
                              </DialogContent>
                            </Dialog>
                          </li>
                          <li className="p-4">
                            <Dialog>
                              <DialogTrigger asChild>
                                <button variant="outline" className="text-[18px]">
                                  Brands
                                </button>
                              </DialogTrigger>
                              <DialogContent className="max-w-[40%] ">
                                <MakeModal />
                              </DialogContent>
                            </Dialog>
                          </li>
                          <li className="p-4">
                            <Dialog>
                              <DialogTrigger asChild>
                                <button variant="outline" className="text-[18px]">
                                  Make
                                </button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                Testing
                              </DialogContent>
                            </Dialog>
                          </li>
                        </ul>
                      </MenubarSub>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </li>
              <li className="flex justify-end lg:justify-center items-center">
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 text-black lg:text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                        />
                      </svg>
                    </MenubarTrigger>
                    <MenubarContent>
                      <MenubarSub>
                        <ul>
                          {userData ? (
                            <li className="flex justify-center items-center p-2 text-[20px]">
                              <button onClick={handleLogout} className="">
                                Log out
                              </button>
                            </li>
                          ) : (
                            <li className="flex justify-center items-center p-2 text-[20px]">
                              <button onClick={() => setOpen(true)} className="">
                                Log in
                              </button>
                            </li>
                          )}
                        </ul>
                      </MenubarSub>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
                <h2 className="mr-12">{userData?.name}</h2>
              </li>
              <li className="flex justify-end lg:justify-center items-center">
                <Sheet>
                  <SheetTrigger asChild>
                    <button className="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-8 text-black lg:text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                        />
                      </svg>
                    </button>
                  </SheetTrigger>
                  <SheetContent>
                    <CartItem />
                  </SheetContent>
                </Sheet>
              </li>
              <AuthModal isOpen={open} onClose={() => setOpen(false)} />
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
