import PropTypes from 'prop-types';
import Loader from '../common/Loader/Loader';
import style from './Profile.module.scss';

const Profile = ({ userName, isLoading }) => {
  return (
    <div className={style.profile}>
      {isLoading ? <Loader /> : <span> User name: {userName}</span>}
    </div>
  );
};

Profile.propTypes = {
  userName: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Profile;
