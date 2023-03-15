import PropTypes from "prop-types";

function Header(props) {
  return (
    <header>
      <div className="container">
        <h2>{props.text} Ui</h2>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "RateYaHappiness",
};
Header.propTypes = {
  text: PropTypes.string,
};
export default Header;
