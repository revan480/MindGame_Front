import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed z-50 w-3/5 top-8 left-1/2 -translate-x-1/2 py-2 px-4 rounded-full bg-darkener-200 shadow-card-200 backdrop-blur-lg">
      <div className="flex items-center justify-between font-medium text-lg">
        {/* left side */}
        <div className="flex items-center gap-9">
          {/* logo */}
          <span className="font-black text-xl text-white">The Mindgame</span>

          {/* elements */}
          <ul className="flex gap-6">
            <li>
              <a href="#home" className="cursor-pointer text-neutral-400 hover:text-white duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#howtoplay" className="cursor-pointer text-neutral-400 hover:text-white duration-300">
                How to play
              </a>
            </li>
            {/* <li>
              <p className="cursor-pointer text-neutral-400 hover:text-white duration-300">Who we are</p>
            </li> */}
          </ul>
        </div>

        {/* right */}
        <div className="flex gap-3">
          <button
            className="bg-transparent py-1 px-4 rounded-full border border-lightener-200 hover:text-white duration-300"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </button>
          <button
            className="bg-lightener-200 border border-transparent py-1 px-4 rounded-full hover:text-white duration-300"
            onClick={() => navigate("/auth/register")}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
