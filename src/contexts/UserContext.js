import { createContext, useState } from 'react';
import { nanoid } from 'nanoid';
import { getLocalStorage, setLocalStorage, deleteLocalStorage } from '../shared';

export const UserContext = createContext({});

export const userList = [
  {
    email : 'nidhal@gmail.com',
    password : 'nidhal'
  },
  {
    email : 'ahmed@gmail.com',
    password : 'ahmed'
  },
  {
    email : 'amal@gmail.com',
    password : 'amal'
  },
  {
    email : 'rafik@gmail.com',
    password : 'rafik'
  }
];

export function UserContextProvider({ children }) {
  const [userData, setUserData] = useState(null);

  function login({ email, password }) {
    let isAuth = false;
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].email === email && userList[i].password === password) {
        isAuth = true;
        break;
      }
    }
    if (isAuth) {
      setUserData({ email, password });
      setLocalStorage('session', nanoid());
    } else {
      window.alert('wrong user');
    }
  }

  function logout() {
    deleteLocalStorage('session');
    setUserData(null);
  }

  function isLoggedIn() {
    return getLocalStorage('session') ? true : false;
  }

  return (
    <UserContext.Provider value={{ userData, login, logout, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
}
