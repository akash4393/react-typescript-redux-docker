import React from "react";
import { useAppSelector, useAppDispatch } from "store/hooks";
import logo from "./logo.svg";
import "./App.css";
import {
  login,
  logout,
  selectUser,
  selectUserStatus,
  API_STATUS,
  selectError,
} from "store/user/userSlice";

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);
  const status = useAppSelector(selectUserStatus);
  const apiError = useAppSelector(selectError);

  const handleLogin = () => {
    dispatch(login());
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          create-react-app with Typescript, Redux & Docker with hot reloading.
        </p>
        <div>
          <a className="App-link" onClick={handleLogin}>
            Login
          </a>
          &nbsp;
          <a className="App-link" onClick={handleLogout}>
            Logout
          </a>
        </div>
        <div>
          {status === API_STATUS.pending && <p>Loading...</p>}
          {status === API_STATUS.failed && (
            <pre>{JSON.stringify(apiError, null, 2)}</pre>
          )}
          {status === API_STATUS.succeeded && (
            <pre>{JSON.stringify(user, null, 2)}</pre>
          )}
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
