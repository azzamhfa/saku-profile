import React from "react";
import Box from "./Box";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="w-full h-screen bg-dimWhite overflow-auto sm:pr-16 pr-6 flex">
      <Sidebar />
      <div className="relative w-[90%] md:w-[98%] z-[1] left-20">
        <Profile />
      </div>
    </div>
  );
}

export default App;
