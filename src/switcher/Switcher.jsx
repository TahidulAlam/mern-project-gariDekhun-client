/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { DarkModeSwitch } from "react-toggle-dark-mode";
const Switcher = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <>
      <DarkModeSwitch
        style={{ margin: "10px" }}
        checked={darkSide}
        onChange={toggleDarkMode}
        size={30}
      />
    </>
  );
};

export default Switcher;
