import { connect } from "react-redux";
import { locRequested } from "../../actions";
import IconBar from "../../components/IconBar";

const mapStateToProps = ({errorMessage}) => ({errorMessage});

export default connect(mapStateToProps, { locRequested })(IconBar);