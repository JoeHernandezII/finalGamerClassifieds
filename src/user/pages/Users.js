import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [{id: 'u1', name: 'Joe Hernandez', image: 'https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500', tags: 2}];

  return <UsersList items={USERS} />;
};

export default Users;
