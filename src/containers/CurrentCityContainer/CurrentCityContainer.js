import { connect } from 'react-redux';
import CurrentCity from "../../components/CurrentCity";

const mapStateToProps = ({ loading, cityByCoords }) => ({
  city: cityByCoords,
  loading
});

export default connect(mapStateToProps)(CurrentCity);