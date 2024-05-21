import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import Cookies from "js-cookie";

const LogIn = () => {
  const dispatchUser = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPhoneLogin, setShowPhoneLogin] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const handleEmailLogin = async (e) => {
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

        await getUserData(response.data.token);
      } else {
        toast.error("Error in Login: No token received");
      }
    } catch (error) {
      toast.error("Error in Login");
      console.error("Error in login:", error);
    }
  };

  const handlePhoneLogin = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("login_type", "phone");
    formData.append("phone", phoneNumber);

    try {
      const response = await axios.post(
        `https://portal.famewheels.com/sendotp`,
        formData
      );
      if (response.data) {
        toast.success("OTP sent to your phone");
        setOtpSent(true);
      } else {
        toast.error("Error in Login: OTP not sent");
      }
    } catch (error) {
      toast.error("Error in Login");
      console.error("Error in login:", error);
    }
  };

  const handleOtp = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("login_type", "phone");
    formData.append("phone", phoneNumber);
    formData.append("otp", otp);

    try {
      const response = await axios.post(
        `https://portal.famewheels.com/login`,
        formData
      );
      if (response.data && response.data.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login Successful");

        await getUserData(response.data.token);
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
      dispatchUser(setUser(response?.data));
      const userData = response.data;
      setUser(userData);
      Cookies.set("userData", JSON.stringify(userData));
      toast.success("User data fetched successfully");
    } catch (error) {
      toast.error("Error fetching user data");
      console.error("Error fetching user data:", error);
    }
  };

  const togglePhoneLogin = () => {
    setShowPhoneLogin(!showPhoneLogin);
    setOtpSent(false); // Reset OTP sent status
  };

  return (
    <section className="bg-gray-50">
      <div className="flex flex-col items-center justify-center mx-auto lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-2">
            <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
              Login
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              onSubmit={
                otpSent
                  ? handleOtp
                  : showPhoneLogin
                  ? handlePhoneLogin
                  : handleEmailLogin
              }
            >
              {!showPhoneLogin && (
                <>
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
                </>
              )}
              {showPhoneLogin && !otpSent && (
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    className="darkbg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4"
                    placeholder="Phone Number"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              )}
              {otpSent && (
                <div>
                  <label
                    htmlFor="otp"
                    className="block mb-2 text-sm font-medium"
                  >
                    OTP
                  </label>
                  <input
                    type="text"
                    name="otp"
                    id="otp"
                    className="darkbg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4"
                    placeholder="Enter OTP"
                    required
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-[#20409a] text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {otpSent
                  ? "Login with OTP"
                  : showPhoneLogin
                  ? "Send OTP"
                  : "Login with Email"}
              </button>
              <div
                className="w-full bg-[#ffffff00] cursor-pointer text-black border-2 border-[#00000037] focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={togglePhoneLogin}
              >
                {showPhoneLogin ? "Back to Email Login" : "Login with Phone"}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogIn;
