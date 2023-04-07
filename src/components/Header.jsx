import PropTypes from "prop-types";

function Header(props) {
  const HeaderStyles = {
    backgroundColor: props.bgColor,
    color: props.Color,
  };

  return (
    <header style={HeaderStyles}>
      <div className="container">
        <h2>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <img
              src="https://em-content.zobj.net/source/microsoft-teams/337/growing-heart_1f497.png"
              width={"50px"}
            />
            {"  "}
            {props.text} Ui{" "}
            <img
              src="https://em-content.zobj.net/source/microsoft-teams/337/growing-heart_1f497.png"
              width={"50px"}
            />
          </div>
        </h2>
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
