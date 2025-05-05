import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from '../api/axios';
import '../styles/login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      setLoading(true);
      try {
        const res = await axios.post('/auth/login', { email, password });
        localStorage.setItem('token', res.data.token);
        alert('Login successful');
        navigate('/');
      } catch (err) {
        console.error(err);
        alert('Login failed');
      } finally {
        setLoading(false);
      }
    };
  
    return ( 
          <div className="login-container">
            <div className="login-card">
              <div className="login-header">
                <h2>Welcome Back</h2>
                <p>Please sign in to your account</p>
              </div>
              
              <form onSubmit={handleLogin}>
                <div className="form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    className="form-input"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
    
                <div className="form-group">
                  <label className="form-label">Password</label>
                  <input
                    className="form-input"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
    
                <button 
                  type="submit" 
                  className="submit-button" 
                  disabled={loading}
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>
              </form>
    
              <div className="signup-link">
                <p>
                  Don't have an account?{' '}
                  <Link to="/signup">Sign up</Link>
                </p>
              </div>
            </div>
          </div>
        );
  }
  
  export default Login;
