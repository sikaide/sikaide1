import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import IdeaMarketplace from './pages/IdeaMarketplace';
import IdeaSubmission from './pages/IdeaSubmission';
import IdeaDetails from './pages/IdeaDetails';
import Messaging from './pages/Messaging';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/marketplace" element={<IdeaMarketplace />} />
            <Route 
              path="/submit" 
              element={
                <ProtectedRoute roles={['creator']}>
                  <IdeaSubmission />
                </ProtectedRoute>
              } 
            />
            <Route path="/ideas/:id" element={<IdeaDetails />} />
            <Route 
              path="/messages" 
              element={
                <ProtectedRoute>
                  <Messaging />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute roles={['admin']}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/register" element={<Register />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;