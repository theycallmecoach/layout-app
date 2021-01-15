import { useState } from "react";
import NavButtonBar from "./NavButtonBar";
import NavDrawer from "./NavDrawer";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  console.log(`drawerOpen:  ${drawerOpen}`);

  const handleDrawerToggle = () => {};

  return (
    <>
      <NavButtonBar onDrawerOpen={setDrawerOpen} />
      <NavDrawer open={drawerOpen} />
    </>
  );
};

export default NavBar;
