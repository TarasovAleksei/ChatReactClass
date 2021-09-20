import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './HeaderProfile.module.scss';

const HeaderProfile = ({ userName, setCurrentChat }) => {
  return (
    <div>
      <span>Пользователь: </span>
      <Link
        to={'/profile'}
        className={style.link}
        onClick={() => setCurrentChat('')}
      >
        {userName}
      </Link>
    </div>
  );
};

HeaderProfile.propTypes = {
  userName: PropTypes.string,
  setCurrentChat: PropTypes.func,
};

export default HeaderProfile;
