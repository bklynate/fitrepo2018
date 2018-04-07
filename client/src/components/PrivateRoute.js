import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ auth, component: Component, user, ...rest }) => (
  <div>
    <Route
      {...rest}
      component={props => (auth ? <Component {...props} user={user}/> : <Redirect to="/" />)}
    />
  </div>
);

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(PrivateRoute);
