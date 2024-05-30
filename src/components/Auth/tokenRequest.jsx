// "use client";

// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import setUser from "@/app/store/userSlice";
// import { toast } from "react-toastify";
// import axios from "axios";
// import Cookies from "js-cookie";


// function RequestToken() {
//   const iframe = document.createElement("iframe");
//   iframe.style.display = "none";
//   iframe.src = "http://192.168.18.25:3000/uashtosd";
//   document.body.appendChild(iframe);
//   window.addEventListener("message", function (event) {
//     if (event.origin === "http://192.168.18.25:3000") {
//       const token = event.data;
//       console.log(`Token receivedd: ${token}`);
//       //   const storeToken = localStorage.getItem("token");

//       if (token) {
//         localStorage.setItem("token", token);
//       }
//     }
//   });
//   iframe.onload = function () {
//     iframe.contentWindow.postMessage(
//       "requestToken",
//       "http://192.168.18.25:3000"
//     );
//   };
// }

// export default function TokenRequester() {
//     const dispatchUser = useDispatch();

// const [userData, setUserData] = useState(null);

// const BASE_URL = "https://portal.famewheels.com";


// const getUserData = async () => {
//   try {
//     const token = localStorage.getItem("token");
//     const response = await axios.get(`${BASE_URL}/getUser`, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const dataResponse = response?.data;
//     Cookies.set("userData", JSON.stringify(dataResponse));
//     dispatchUser(setUser(dataResponse));
//     setUserData(dataResponse);
//     toast.success("User data fetched successfully");
//   } catch (error) {
//     toast.error("Error fetching user data");
//     console.error("Error fetching user data:", error);
//   }
// };


//   useEffect(() => {
//     RequestToken();
//     getUserData();

//   }, []);

//   return null;
// }
