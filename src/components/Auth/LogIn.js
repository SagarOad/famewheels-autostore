import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

const LogIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    try {
      const response = await axios.post(
        `https://portal.famewheels.com/login`,
        formData
      );
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login Successful");

        getUserData(response.data.token);
      } else {
        toast.error("Error in Login: No token received");
      }
    } catch (error) {
      toast.error("Error in Login");
      console.error("Error in login:", error);
    }
  };

  const getUserData = async (token) => {
    try {
      const response = await axios.get(
        `https://portal.famewheels.com/getUser`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setUser(response.data);
      Cookies.set("userData", JSON.stringify(response?.data));

      const userData = Cookies.get("userData");
      const parsedUserData = JSON.parse(userData);

      console.log(parsedUserData.name, "User data test");

      console.log(user);
    } catch (error) {
      toast.error("Error fetching user data");
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserData(token);
    }
  }, []);

  return (
    <>
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center mx-auto lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold"
          ></a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-2">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Login
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="darkbg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4"
                    placeholder="name@company.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#20409a] text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Login
                </button>

                <div>
                  <button
                    type="button"
                    className="text-white w-full bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2"
                  >
                    <svg
                      className="mr-2 -ml-1 w-4 h-4"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                    Sign up with Google<div></div>
                  </button>
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don't have an account?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;
