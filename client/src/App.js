import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PublicRoute } from './routes';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<PublicRoute />}>
          <Route exact path="/" element={<div>hello world</div>} />
        </Route>

        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
