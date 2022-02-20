import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const AboutScreen = () => {

  const {user, setUser} = useContext(UserContext);

  const handleClick = () =>{
    setUser({})
  }

  return (
  <div>
    <h1>AboutScreen</h1>
    <hr/>
        <pre className='container'>
      {JSON.stringify(user, null, 4)}
    </pre>
    <button className='btn btn-warning' onClick={handleClick}>
      Logout
    </button>
  </div>
  )
};