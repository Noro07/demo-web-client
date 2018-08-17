import LandingReducer, { LANDING_INITSTATE } from '../../../src/reducers/LandingReducer';

describe('view reducers', () => {
  let initialState;

  beforeEach(() => {
    initialState = LANDING_INITSTATE;
  });

  it('should do nothing if action name is not matched', ()=> {
    const action = { type: null };
    const state = LandingReducer(undefined, action);

    expect(state).toEqual(initialState);
    expect(true).toEqual(true);
  });
});
