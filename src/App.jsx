import React, { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { ToastContainer } from 'react-toastify';
import { useTranslation } from 'react-i18next'; 
import './i18n';

const App = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user && location.pathname !== '/login') {
        navigate('/login');
      } else if (user && location.pathname === '/login') {
        navigate('/');
      }
    });

    return () => unsubscribe();
  }, [navigate, location]);

  return (
    <div>
      <ToastContainer theme="dark" />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
