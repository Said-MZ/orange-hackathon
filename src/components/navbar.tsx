import React from "react";
import { ModeToggle } from "./ui/theme-btn";

const Navbar = () => {
  return (
    <nav>
      <div className="layout-wrapper">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
