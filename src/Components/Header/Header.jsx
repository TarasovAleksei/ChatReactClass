import PropTypes from 'prop-types';
import style from './Header.module.scss';
import HeaderProfile from './HeaderProfile/HeaderProfile';

export const Header = ({ chats, currentChat, userName, setCurrentChat }) => {
  if (chats.length === 0) {
    return (
      <div className={style.header}>
        <div className={style.chat}>No chats</div>
        <HeaderProfile userName={userName} setCurrentChat={setCurrentChat} />
      </div>
    );
  }
  const chatName = chats.find(({ chatId }) => chatId === currentChat)?.chatName;
  return (
    <div className={style.header}>
      <div className={style.chat}>
        {chatName ? chatName : 'No chat selected'}
      </div>
      <HeaderProfile userName={userName} setCurrentChat={setCurrentChat} />
    </div>
  );
};

Header.propTypes = {
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
  currentChat: PropTypes.string,
  userName: PropTypes.string,
  setCurrentChat: PropTypes.func,
};

export default Header;
