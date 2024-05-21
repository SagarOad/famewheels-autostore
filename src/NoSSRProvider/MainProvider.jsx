"use client";
import { store } from "@/app/store/store";
import React from "react";
import { Provider } from "react-redux";
// import { store } from "@/app/store/store";

const MainProvider = ({ children }) => {
  return (
      <Provider store={store}>{children}</Provider>
  );
};

export default MainProvider;
