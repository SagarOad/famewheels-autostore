"use client";
import { UserContext } from "@/context/UserContext";
import React from "react";


const MainProvider = ({ children }) => {
  return (
      <>{children}</>
  );
};

export default MainProvider;
