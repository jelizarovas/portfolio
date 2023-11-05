import React from "react";
import { RxGithubLogo } from "react-icons/rx";
import { MdEmail, MdOutlineHideImage, MdRemoveRedEye } from "react-icons/md";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

function App() {
  return (
    <div className="App min-h-screen w-full h-full flex flex-col justify-center font-sans">
      <Header />
      <div className="flex flex-grow w-full ">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
