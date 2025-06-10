// App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import ProfileSetup from './pages/auth/profile-setup';
function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />

        </Routes>
      </main>
    </>
  );
}

export default App;
