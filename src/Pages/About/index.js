import React from 'react';
import { signIn, signInSilent, signOut } from '@actions/idenity.action';
import { Switch, Route, Link } from 'react-router-dom';
import { connected } from '@store/connected';

import PropTypes from 'prop-types';

const isAuthenticated = user => {
  return !!(user && user.profile);
};

const getUserName = user => {
  return user && user.profile && user.profile.name ? user.profile.name : '';
};

class About extends React.Component {
  
  componentDidMount() {
    const { actions, user } = this.props;
    if (!user) {
      actions.signInSilent().catch(e => console.error(e));
    }
  }

  render() {
    console.log(this.props.clients);
    const name = getUserName(this.props.user);
    const isConnected = isAuthenticated(this.props.user);

    return (
      <div>
        {isConnected ? (
          <div>
            <div>hello {name}</div>
            <br />
            <button onClick={this.props.actions.signOut}>signout</button>
          </div>
        ) : (
          <button onClick={this.props.actions.signIn}>signin</button>
        )}
      </div>
    );
  }
}

export default connected(About)
  .mappingStateToProps(state => {
    return {
      clientId: state.appConfig.oauth2.client_id,
      user: state.oidc.user,
      appConfig: state.appConfig,
      clients: state.clients,
    };
  })
  .mappingActionsToProps({ signIn, signInSilent, signOut })
  .build();
