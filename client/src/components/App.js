import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
import LandingPage from './LandingPage';
import PrivateRoute from './PrivateRoute';
import MacroTracker from './MacroTracker';

const NotFound404 = () => <h2>PAGE NOT FOUND</h2>;

class App extends Component {
  state = {
    user: {},
  };

  async componentDidMount() {
    const user = await this.props.fetchUser();
    console.log(user, 'this is the USER');
    return this.setState(() => ({
      user
    }));

  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <PrivateRoute
                  exact
                  path="/macroTracker"
                  component={MacroTracker}
                  user={this.state.user}
                />
                <Route exact path="*" component={NotFound404} />
              </Switch>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
