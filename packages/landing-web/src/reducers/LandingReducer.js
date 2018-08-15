import * as ACTION_TYPE from '../constants/ActionType';

export const LANDING_INITSTATE = {
  user: 'default user',
};

const landing = (state = LANDING_INITSTATE, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOAD_USER:
      return {
        ...state,
        user: action.data,
      };
    default:
      return state;
  }
};

export default landing;
