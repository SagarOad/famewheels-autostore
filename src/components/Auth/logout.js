// utils/logout.js
import { clearUser } from "@/app/store/userSlice";
import Cookies from "js-cookie";

export const logout = (dispatch) => {
  localStorage.removeItem("token");
  Cookies.remove("userData");
  dispatch(clearUser());
};