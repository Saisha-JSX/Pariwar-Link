// App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/auth/login';
import Signup from './pages/auth/signup';
import ProfileSetup from './pages/auth/profile-setup';
import Dashboard from './pages/Dashboard/Layout';
import FamilyTree from './pages/Dashboard/FamilyTree/index';
import Profile from './pages/Dashboard/Profile';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile-setup" element={<ProfileSetup />} />

        {/* Dashboard layout with nested routes */}
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<Navigate to="family" replace />} />
          <Route path="family" element={<FamilyTree />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Optional fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </main>
  );
}

export default App;
