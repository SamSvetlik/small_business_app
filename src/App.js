import './App.css';
import React from 'react';
import Navigation from './components/Navigation'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './components/Home'
import Businesses from './components/Businesses'
import Login from './components/Login'
import Business from './components/Business';
import ProtectedRoute from './components/ProtectedRoute';
import AddBusiness from './components/AddBusiness'
import EditBusiness from './components/EditBusiness';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='business' element={<Businesses />} />
          <Route path='login' element={<Login />} />
          <Route path="/business/:id" element={<Business />} />
          <Route path="/add" element={<ProtectedRoute component={AddBusiness} />} />
          <Route path='/edit/:id' element={<ProtectedRoute component={EditBusiness} />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
