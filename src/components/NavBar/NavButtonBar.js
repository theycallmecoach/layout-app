import PropTypes from "prop-types";

const NavButtonBar = ({ onDrawerOpen }) => {
  const handleOpenDrawer = () => {
    onDrawerOpen(true);
  };

  return (
    <>
      <button type="button" onClick={handleOpenDrawer}>
        Show Drawer
      </button>
    </>
  );
};

NavButtonBar.propTypes = {
  onDrawerOpen: PropTypes.func.isRequired,
};

export default NavButtonBar;
