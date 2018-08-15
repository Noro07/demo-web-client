import { fetchUtils } from 'utils-web';
import * as ACTION_TYPE from '../constants/ActionType';

export const loadUser = user => ({
  type: ACTION_TYPE.LOAD_USER,
  data: user,
});

export const fetchUser = () => (dispatch) => {
  const requestURL = '/api/user';
  fetchUtils.fetchJSON(requestURL).then((json) => {
    dispatch(loadUser(json.user));
  }, () => {
  });
};
