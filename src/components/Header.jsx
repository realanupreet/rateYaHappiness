import PropTypes from "prop-types";

function Header(props) {
  const HeaderStyles = {
    backgroundColor: props.bgColor,
    color: props.Color,
  };

  return (
    <header style={HeaderStyles}>
      <div className="container">
        <h2>{props.text} Ui</h2>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "RateYaHappiness",
  bgColor: "rgba(0,0,0,0.4)",
  Color: "#ff6a95",
};
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  Color: PropTypes.string,
};
export default Header;
