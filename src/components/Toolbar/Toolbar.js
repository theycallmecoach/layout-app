import PropTypes from "prop-types";
import S from "./Toolbar.styled";

const Toolbar = ({ orientation, children }) => {
  const StyledToolbar = orientation === "vertical" ? S.Vertical : S.Horizontal;
  return <StyledToolbar>{children}</StyledToolbar>;
};

Toolbar.propTypes = {
  orientation: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Toolbar.defaultProps = {
  orientation: "horizontal",
};

export default Toolbar;
