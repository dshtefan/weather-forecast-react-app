import { connect } from 'react-redux';
import { FavoriteCities } from "../../components";

const mapStateToProps = ({ cities }) => ({
  cities
});

export default connect(mapStateToProps)(FavoriteCities);