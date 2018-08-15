import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchUser } from '../actions/index';

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const { loadUser } = this.props;
    loadUser();
  }

  render() {
    const { user } = this.props;
    console.log('====================================');
    console.log(`${user}`);
    console.log('====================================');
    return (
      <div className="demo-app">
        {`Hello, ${user}!`}
      </div>
    );
  }
}

App.propTypes = {
  user: PropTypes.string,
  loadUser: PropTypes.func.isRequired,
};

App.defaultProps = {
  user: 'default user 1',
};

const mapStateToProps = state => ({
  user: state.landing.user,
});

const mapDispatchToProps = dispatch => ({
  loadUser(state) {
    dispatch(fetchUser(state));
  },
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
