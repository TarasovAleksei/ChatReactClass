import PropTypes from 'prop-types';
import { ListItemText } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import ListItem from '@material-ui/core/ListItem';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import style from './ChatList.module.scss';

const ChatList = ({
  isAdding,
  chats,
  addChatInputValue,
  updateAddChatInputValue,
  currentChat,
  push,
  isMarkChat,
  deleteChatAPI,
  addChatAPI,
  isDeleting,
}) => {
  const listEl = chats.map(({ chatId, chatName }) => (
    <ListItem
      key={chatId}
      onClick={() => push(`/chat/${chatId}`)}
      button
      selected={currentChat === chatId}
      style={
        isMarkChat.some(id => id === chatId)
          ? { backgroundColor: 'rgba(255, 255, 255, 0.5)' }
          : null
      }
    >
      <ListItemText primary={chatName} />
      <IconButton
        className={style.delBtn}
        disabled={isDeleting}
        edge='end'
        aria-label='delete'
        onClick={() => deleteChatAPI(chatId)}
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  ));
  const addChatHandler = event => {
    event.preventDefault();
    addChatAPI();
  };
  return (
    <div className={style.chatListWrapper}>
      {isAdding ? (
        <CircularProgress className={style.loader} />
      ) : (
        <div className={style.chatList}>{listEl}</div>
      )}
      <form onSubmit={addChatHandler} className={style.form}>
        <TextField
          id='standard-basic'
          label='add new chat'
          value={addChatInputValue}
          onChange={e => updateAddChatInputValue(e.target.value)}
        />
        <Fab
          color='primary'
          aria-label='add'
          disabled={!addChatInputValue || isAdding}
          type='submit'
        >
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};

ChatList.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      chatId: PropTypes.string,
      chatName: PropTypes.string,
      messages: PropTypes.arrayOf(
        PropTypes.shape({
          author: PropTypes.string,
          id: PropTypes.number,
          text: PropTypes.string,
        })
      ),
    })
  ),
  isMarkChat: PropTypes.arrayOf(PropTypes.string),
  currentChat: PropTypes.string,
  addChatInputValue: PropTypes.string,
  isAdding: PropTypes.bool,
  isDeleting: PropTypes.bool,
  updateAddChatInputValue: PropTypes.func,
  push: PropTypes.func,
  deleteChatAPI: PropTypes.func,
  addChatAPI: PropTypes.func,
};

export default ChatList;
