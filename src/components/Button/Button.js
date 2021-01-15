import PropTypes from "prop-types";
import S from "./Button.styled";

const Button = ({ children, onClick: onClickProp }) => {
  const startIcon = null;
  const endIcon = null;

  return (
    <S.Button onClick={onClickProp}>
      <S.Span>
        {startIcon}
        {children}
        {endIcon}
      </S.Span>
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  children: null,
  onClick: null,
};

export default Button;
