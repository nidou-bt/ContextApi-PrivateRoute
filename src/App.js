import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import UserProfile from './views/UserProfile';
import { UserContext } from './contexts/UserContext';

function App() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={!isLoggedIn() ? <Login /> : <Navigate to='/' replace={true} />} />
      <Route path='/user' element={isLoggedIn() ? <UserProfile /> : <Navigate to='/sign-in' replace={true} />} />
    </Routes>
  );
}

export default App;
