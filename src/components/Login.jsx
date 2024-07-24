import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/master/APIs/AuthUser/login", {
        mobile: mobile,
        otpType: "text",
      });
      if (response?.data?.status) {
        setResponseMessage(response?.data?.msg);
        console.log("Token:", response?.data?.token);
      } else {
        setResponseMessage("Failed to send OTP");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setResponseMessage("Error occurred during login");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('https://e1.pxfuel.com/desktop-wallpaper/581/154/desktop-wallpaper-backgrounds-for-login-page-login-page.jpg')] bg-no-repeat bg-cover">
      <div className="p-6 max-w-80 w-full bg-white bg-opacity-70 rounded-lg shadow-2xl flex content-center items-center flex-col">
        <h2 className="text-3xl font-semibold mb-4 ">Login</h2>
        <input
          type="text"
          placeholder="Enter your mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="w-full p-2 mb-4 border rounded-lg "
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
        >
          Send OTP
        </button>
        {responseMessage && (
          <p className="mt-4 text-red-500">{responseMessage}</p>
        )}

        <p className="text-sm text-blue-500 mt-4">
          Don't have an account? Sign up
        </p>

        <p className="text-sm mt-4">
          By proceeding, you agree to Party Witty's <br />
          <span className="text-blue-500">Privacy Policy </span>
          and Terms & Condition{" "}
        </p>
      </div>
    </div>
  );
};

export default Login;
