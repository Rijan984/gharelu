// import logo from './logo.svg';
import React from 'react';
import { useEffect, useState } from 'react';
// import { useNavigate } from "react-router-dom";
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Loading from './components/loading/Loading';
import Login from './components/login/Login';
import Profile from './components/profile/Profile';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import Error from './components/404Error/Error';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import Dashboard from './components/dashboard/Dashboard';
import Filter from './components/filter/Filter';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';
import Search from './components/property/searchProperty/Search';
import Blog from './components/blog/Blog';
function App() {
  // const navigate = useNavigate();
  const redux = useSelector(selectUser);
  const reduxLogin = redux.loggedIn;

  // const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
    console.log('hey');
  }, 3000);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Router>
        <div>
          <Nav />
          <Routes>
            {/* <Route exact path="*" element={<Loading />} /> */}

            {!reduxLogin && (
              <>
                <Route exact path="/login" element={<Home />} />
                <Route
                  exact
                  path="/profile"
                  element={<Navigate replace to="/" />}
                />
                <Route exact path="/" element={<Home />} />
              </>
            )}

            {reduxLogin && (
              <>
                <Route
                  exact
                  path="/"
                  element={<Navigate replace to="/profile" />}
                />
                <Route exact path="/profile" element={<Profile />} />
                <Route
                  exact
                  path="/login"
                  element={<Navigate replace to="/profile" />}
                />
                <Route exact path="/jobs" element={<Filter />} />
                <Route exact path="/blog" element={<Blog />} />
                <Route exact path="/property" element={<Search />} />
              </>
            )}
            <Route path="/notFound" element={<Error />} />
            <Route path="*" element={<Navigate replace to="/notFound" />} />
          </Routes>
          <NotificationContainer />
        </div>
      </Router>

      {/* <div className="App">{loading ? <Loading /> : <Login />}</div> */}
    </>
  );
}

export default App;
