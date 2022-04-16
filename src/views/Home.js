import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext'

function Home() {
const { logout, isLoggedIn } = useContext(UserContext);

  return (
    <div>
      <Link to='/user'>User</Link> <br/>
      {isLoggedIn() ? <button onClick={logout}>Logout</button> : <Link to='/sign-in'>Sign In</Link>}
    </div>
  );
}

export default Home;
