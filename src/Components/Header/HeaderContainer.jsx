import { connect } from 'react-redux';
import { setCurrentChat } from '../../redux/chats-reducer';
import Header from './Header';

const mapStateToProps = state => ({
  chats: state.messenger.chats,
  currentChat: state.messenger.currentChat,
  userName: state.profile.userName,
});

export default connect(mapStateToProps, { setCurrentChat })(Header);
