import { connect } from 'react-redux';
import Profile from './Profile';

const mapStateToProps = state => ({
  userName: state.profile.userName,
  isLoading: state.messenger.isLoading,
});

export default connect(mapStateToProps)(Profile);
