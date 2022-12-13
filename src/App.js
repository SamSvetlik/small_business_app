import './App.css';
import React from 'react';
import Navigation from './components/Navigation'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './components/Home'
import Listings from './components/Listings'
import Login from './components/Login'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='listings' element={<Listings />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
