import PropTypes from 'prop-types';
import Loader from '../common/Loader/Loader';
import style from './EmptyChat.module.scss';

const EmptyChat = ({ chats, isLoading }) => {
  if (isLoading) return <Loader />;
  if (chats.length > 0) {
    return <div className={style.messageField}>You need to select a chat</div>;
  }
  return (
    <div className={style.messageField}>You need to create a new chat</div>
  );
};

EmptyChat.propTypes = {
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
  isLoading: PropTypes.bool,
};

export default EmptyChat;
