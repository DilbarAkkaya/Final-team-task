import React from 'react';
import { useSelector } from 'react-redux';
import { TStore } from '../../store';

function Main() {
  const { user } = useSelector((store: TStore) => store.userReducer);

  return (
    <>
      <h2>Main page</h2>
      {user && <h3>Hello, {user.name}</h3>}
    </>
  );
}

export default Main;
