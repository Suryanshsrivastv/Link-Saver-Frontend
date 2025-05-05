import { useState, useEffect } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';

function AddBookmark() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  const handleAdd = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Not authenticated');
      }

      await axios.post('/bookmarks', 
        { url },
        { 
          headers: { 
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          } 
        }
      );
      navigate('/');
    } catch (err) {
      console.error(err);
      if (err.message === 'Not authenticated') {
        navigate('/login');
      } else {
        alert('Failed to add bookmark: ' + (err.response?.data?.error || err.message));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="auth-card">
        <div className="auth-header">
          <h2>Add New Bookmark</h2>
          <p>Enter the URL you want to save</p>
        </div>
        
        <form onSubmit={handleAdd} className="bookmark-form">
          <div className="form-group">
            <label className="form-label">Website URL</label>
            <input
              type="url"
              className="form-input"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="submit-button" 
            disabled={loading}
          >
            {loading ? 'Saving…' : 'Save Bookmark'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBookmark;
