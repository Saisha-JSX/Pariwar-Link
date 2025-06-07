// App.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/home';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';  // <-- Import Signup here

function App() {
  return (
    <>
      {/* If you want Navbar visible on all pages, add it here */}
      {/* <Navbar /> */}

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />   {/* <-- Add Signup route */}
        </Routes>
      </main>
    </>
  );
}

export default App;
