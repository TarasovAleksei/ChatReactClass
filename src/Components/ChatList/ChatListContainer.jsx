import React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import {
  updateAddChatInputValue,
  markChatRead,
  getChatsAPI,
  deleteChatAPI,
  addChatAPI,
} from '../../redux/chats-reducer';
import { loadProfileAPI } from '../../redux/profile-reducer';
import ChatList from './ChatList';

class ChatListContainter extends React.Component {
  componentDidMount() {
    this.props.getChatsAPI();
    this.props.loadProfileAPI();
  }
  componentDidUpdate(prevProps) {
    const { currentChat, markChatRead } = this.props;
    if (prevProps.currentChat !== currentChat) {
      markChatRead(currentChat);
    }
  }
  render() {
    return <ChatList {...this.props} />;
  }
}

const mapStateToProps = state => ({
  chats: state.messenger.chats,
  addChatInputValue: state.messenger.addChatInputValue,
  currentChat: state.messenger.currentChat,
  isMarkChat: state.messenger.isMarkChat,
  isDeleting: state.messenger.isDeleting,
  isAdding: state.messenger.isAdding,
});

export default connect(mapStateToProps, {
  updateAddChatInputValue,
  push,
  markChatRead,
  getChatsAPI,
  deleteChatAPI,
  addChatAPI,
  loadProfileAPI,
})(ChatListContainter);
