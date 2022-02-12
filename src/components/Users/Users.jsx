import React from 'react';
import { useSelector } from 'react-redux';
import { NO_ADDRESS } from '../../constants';
import AddCard from '../AddCard/AddCard';
import UserCard from '../UserCard/UserCard';

import styles from './Users.module.css';

const Users = () => {
  const { users, address } = useSelector((state) => ({
    users: state.userReducer.users,
    address: state.userReducer.address,
  }));

  return (
    <div className={styles.users}>
      {users.length > 0 &&
        users.map((user) => (
          <UserCard key={user.id} userId={user.id} name={user.name} phone={user.phone} email={user.email} />
        ))}
      {address.id !== NO_ADDRESS && <AddCard />}
    </div>
  );
};

export default Users;
