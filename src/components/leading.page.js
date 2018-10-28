import React from 'react';
import auth from '../auth/auth';

export const LeadingPage = props => {
  return (
    <div>
      <h2>Leading Page</h2>
      <button onClick={
        () => {
          auth.login(() => {
            props.history.push('/app');
          })
        }
      }>Login</button>
    </div>
  )
}