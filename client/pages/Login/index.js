// React lib import
import React from 'react';
import { Route } from 'react-router-dom';

// third-party imports
import { Redirect } from 'react-router-dom';
import dotenv from 'dotenv';

// utils
import isLoggedIn from '../../utils/isLoggedIn';


dotenv.config();

/**
 * Renders the Login component
 *
 * @returns {JSX} JSX
 * @memberof LoginPage
 */
const Login = (props) => {
  const previousLocation = props.location.state ? props.location.state.previousLocation : null
  const redirectUrl = `${process.env.ANDELA_API_BASE_URL}/login?redirect_url=${previousLocation ? previousLocation : process.env.FRONTEND_BASE_URL}`;
  // const slackAuthUrl = `https://slack.com/oauth/authorize?scope=identity.basic&client_id=${process.env.SLACK_APP_CLIENT_ID}&redirect_uri=${previousLocation ? previousLocation : process.env.FRONTEND_BASE_URL}&state=q5rfdr34r434tf`;
  const slackAuthUrl = `${process.env.SLACK_AUTH_URL}&redirect_uri=${previousLocation ? previousLocation : process.env.FRONTEND_BASE_URL}`;
  if (isLoggedIn()) {
    return (<Redirect to="/events" />);
  }

  return (
    <div className="login_container">
      <div className="login_container__section">
        <img
          src="http://res.cloudinary.com/dd3lv0o93/image/upload/v1531322847/Andela_Logo_3_jkv99w.png"
          alt="andela-logo"
        />
        <p> Get Closer to your <span>social</span> Meetup</p>
        <p>
          Work hard play harder, exclusive VIP access to the best events,
          parties and everything
          <span> FUN!!! </span>
        </p>
        <a className="login_container__btn" href={redirectUrl}>
          Join the creed now!
        </a>
        <a href={slackAuthUrl}>
          <img alt="Sign in with slack" src="https://api.slack.com/img/sign_in_with_slack.png" />
        </a>
      </div>
    </div>
  );
};
export default Login;
