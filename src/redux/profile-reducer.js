import { profileAPI } from '../api/api';
import { toggleIsLoading } from './chats-reducer';

const LOAD_PROFILE = 'LOAD_PROFILE';

const initialState = {};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PROFILE:
      return {
        ...state,
        userName: action.profile,
      };

    default:
      return state;
  }
};

export const loadProfile = profile => ({
  type: LOAD_PROFILE,
  profile,
});

export const loadProfileAPI = () => {
  return dispatch => {
    dispatch(toggleIsLoading(true));
    profileAPI.loadProfile().then(data => {
      const { userName } = data;
      if (userName) {
        dispatch(loadProfile(userName));
      }
      dispatch(toggleIsLoading(false));
    });
  };
};

export default profileReducer;
