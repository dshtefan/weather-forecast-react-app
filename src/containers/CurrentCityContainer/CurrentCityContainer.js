import { connect } from 'react-redux';
import { CurrentCity } from "../../components";

const mapStateToProps = ({ loading, cityByCoords }) => ({
  city: cityByCoords,
  loading
});

export default connect(mapStateToProps)(CurrentCity);