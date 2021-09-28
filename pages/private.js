import React from 'react';
import withAuth from '../auth/withAuth';
import { useUser } from '../auth/useUser';
import Library from '../components/Library';

const Private = () => {
  const { user, logout } = useUser();

  return (
    <div>
      <div>Welcome User</div>
      {user?.email && (
        <div>
          <div>Email: {user.email}</div>
          <Library />
          <button onClick={() => logout()}>Logout</button>
        </div>
      )}
    </div>
  );
};

export default withAuth(Private);
