import { connect } from "react-redux";
import Calculator from "./Calculator";

const CalculatorContainer = (props) => {
  return <Calculator {...props} />;
};

let mapStateToProps = (state) => {
  return {
    buttons: state.buttons,
  };
};

export default connect(mapStateToProps, null)(CalculatorContainer);
