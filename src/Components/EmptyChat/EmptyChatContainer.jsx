import { connect } from 'react-redux';
import EmptyChat from './EmptyChat';

const mapStateToProps = state => ({
  chats: state.messenger.chats,
  isLoading: state.messenger.isLoading,
});

export default connect(mapStateToProps)(EmptyChat);
