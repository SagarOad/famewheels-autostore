// components/TokenHandler.js
"use client";

import { useEffect } from "react";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

export default function TokenHandler() {
  const token = Cookies.get("user_token");
  useEffect(() => {
    // Function to generate a 12-digit token
    const generateToken = () => {
      const newToken = uuidv4().replace(/-/g, "").slice(0, 50);
      Cookies.set("user_token", newToken, { expires: 7 });
      console.log("Generated new token:", newToken);
    };
    if (!token) {
      generateToken();
    } else {
      console.log("user already exist", token);
    }
  }, []);

  return null;
}
