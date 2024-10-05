// pages/profile.js
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function Profile({ user }) {
  return (
    <div>
      <h1>Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export default withPageAuthRequired(Profile);
