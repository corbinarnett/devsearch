import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import Moon from "../../assets/icon-moon.svg";
import Sun from "../../assets/icon-sun.svg";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="flex container mx-auto justify-between max-w-[730px] max-h-[36px] mt-36">
      <h1>devfinder</h1>
      {theme === "dark" ? (
        <div
          className="flex items-center cursor-pointer font-bold text-[13px] tracking-[2.5px]"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          LIGHT
          <img src={Sun} alt="sun icon" className="ml-4" />
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer font-bold text-[13px] tracking-[2.5px]"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          DARK
          <img src={Moon} alt="moon icon" className="ml-4" />
        </div>
      )}
    </div>
  );
};

export default Toggle;
