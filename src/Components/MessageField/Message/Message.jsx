import PropTypes from 'prop-types';
import style from './Message.module.scss';

const Message = ({ messages, deleteMsgAPI, msgIsDeleting }) => {
  const msgEl = messages.map(msg => (
    <div
      key={msg.id}
      className={style.msgWrapper}
      style={
        msg.author === 'bot'
          ? { alignSelf: 'flex-start' }
          : { alignSelf: 'flex-end' }
      }
    >
      <div className={style.msg}>
        <span className={style.author}>{msg.author}: </span>
        {msg.text}
      </div>
      <button
        disabled={msgIsDeleting}
        className={style.del}
        onClick={() => deleteMsgAPI(msg.id)}
      >
        <i className='fas fa-times-circle'>x</i>
      </button>
    </div>
  ));

  return msgEl;
};

Message.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string,
      id: PropTypes.number,
      text: PropTypes.string,
    })
  ),
  msgIsDeleting: PropTypes.bool,
  deleteMsgAPI: PropTypes.func,
};

export default Message;
