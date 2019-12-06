import { connect } from 'react-redux';
import FavoriteCities from "../../components/FavoriteCities";

const mapStateToProps = ({ cities }) => ({
  cities
});

export default connect(mapStateToProps)(FavoriteCities);