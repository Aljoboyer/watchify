import React from "react";
import AuthLogo from '../../../assets/authbanner2.jpg'
import RootLayout from "../RootLayout/RootLayout";

const AuthLayout = ({ children }) => {
  return (
     <RootLayout>
      <div className="h-screen flex flex-col md:flex-row">
  
      <div className="hidden md:flex md:w-1/2 text-white flex-col justify-center items-start p-4">
        <img src={AuthLogo} alt="" className="h-full w-full rounded-lg"/>
      </div>

      {/* Right Section (Form) */}
      <div className="flex h-full w-full md:w-1/2 bg-overlay justify-center items-center p-8">
            {children}
      </div>
    </div>
     </RootLayout>
  );
}

export default AuthLayout


