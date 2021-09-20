import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { setCurrentChat, deleteMsgAPI } from '../../redux/chats-reducer';
import MessageField from './MessageField';

class MessageFieldContainer extends React.Component {
  constructor(props) {
    super(props);
    this.messageFieldRef = React.createRef();
  }

  componentDidUpdate(prevProps, prevState) {
    const idx = this.props.match.params?.chatId - 1;
    if (
      prevProps.chats[idx]?.messages?.length <
      this.props.chats[idx]?.messages?.length
    ) {
      this.messageFieldRef.current.scrollTop =
        this.messageFieldRef.current.scrollHeight -
        this.messageFieldRef.current.clientHeight;
    }
  }

  render() {
    return (
      <MessageField {...this.props} messageFieldRef={this.messageFieldRef} />
    );
  }
}

const WithChatIdMessageFieldContainer = withRouter(MessageFieldContainer);

const mapStateToProps = state => ({
  chats: state.messenger.chats,
  isLoading: state.messenger.isLoading,
  isDeleting: state.messenger.isDeleting,
  msgIsDeleting: state.messenger.msgIsDeleting,
});

export default connect(mapStateToProps, {
  setCurrentChat,
  deleteMsgAPI,
})(WithChatIdMessageFieldContainer);
