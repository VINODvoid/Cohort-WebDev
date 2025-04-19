import { Moon, Sun } from "lucide-react";
import React, { useState } from "react";
import { cn } from "../lib/utils";

const ToggleTheme = () => {
  return (
    <>
      <div className={cn()}>
        <SwitchTheme />
      </div>
    </>
  );
};

function SwitchTheme() {
  const [toggleTheme, setToggleTheme] = useState(false);
  return (
    <div
      onClick={() => {
        setToggleTheme(!toggleTheme);
      }}
    >
      {toggleTheme ? (
        <Moon className="text-white" />
      ) : (
        <Sun className="text-yellow-500" />
      )}
      <div className="bg-white text-black dark:bg-black dark:text-white">
        Your content here
      </div>
    </div>
  );
}

export default ToggleTheme;
