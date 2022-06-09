import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  console.log({ theme });
  return (
    <button
      onClick={() => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
      }}
    >
      {theme === "dark" ? "dark" : "light"}
    </button>
  );
};

export default Toggle;
