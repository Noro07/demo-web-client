import * as ACTION_TYPE from '../constants/ActionType';

export const DEMO_INITSTATE = {
  user: '',
};

const demo = (state = DEMO_INITSTATE, action) => {
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

export default demo;
