import React from "react";
import AuthLogo from '../../../assets/auth_banner.jpg'

const AuthLayout = ({ children }) => {
  return (
     <div className="h-screen flex flex-col md:flex-row">
  
      <div className="hidden md:flex md:w-1/2 text-white flex-col justify-center items-start px-10 ">
        <img src={AuthLogo} alt="" className="h-full w-full"/>
      </div>

      {/* Right Section (Form) */}
      <div className="flex h-full w-full md:w-1/2 bg-overlay justify-center items-center p-8">
            {children}
      </div>
    </div>
  );
}

export default AuthLayout