import React, { useState } from "react";

function Sidebar() {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      id="sidebar_main"
      className={`absolute left-0 ${
        toggle ? "sm:w-[280px] w-screen justify-center" : "justify-center w-24"
      } bg-dimWhite px-2 items-center flex flex-col shadow-xl border-solid bg-pink-400 border-[1px] h-full z-[2] slide-right`}
      onClick={() => setToggle((prev) => !prev)}
    >
      <div className="flex items-center">
        <img
          src="https://sakurazaka46.com/images/14/3c0/4c3cd9839ab59685fbae74a5b8596/1000_1000_102400.jpg"
          alt=""
          className="rounded-full object-cover object-top w-[60px] h-[60px] m-2"
        />
        <p className={`${toggle ? "block" : "hidden"} font-poppins font-bold text-white `}>Koike Minami</p>
      </div>
      <div className="flex items-center">
        <img
          src="https://sakurazaka46.com/images/14/3c0/4c3cd9839ab59685fbae74a5b8596/1000_1000_102400.jpg"
          alt=""
          className="rounded-full object-cover object-top w-[60px] h-[60px] m-2"
        />
        <p className={`${toggle ? "block" : "hidden"} font-poppins font-bold text-white `}>Koike Minami</p>
      </div>
    </div>
  );
}

export default Sidebar;
