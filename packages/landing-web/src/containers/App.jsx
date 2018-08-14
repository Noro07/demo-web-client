import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';

export class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // eslint-disable-next-line
    const { user } = this.props;
    return (
      <div className="demo-app">
        {user}
      </div>
    );
  }
}

// App.PropTypes = {
//   user: PropTypes.string.isRequired,
// };

const mapStateToProps = state => ({
  user: state.demo.user,
});

export default withRouter(connect(mapStateToProps, null)(App));
