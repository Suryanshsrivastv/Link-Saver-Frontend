import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import '../styles/dashboard.css';

function Dashboard() {
  const [bookmarks, setBookmarks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookmarks = async () => {
      try {
        const token = localStorage.getItem('token');
        const res = await axios.get('/bookmarks', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setBookmarks(res.data);
      } catch (err) {
        console.error(err);
        alert('Failed to fetch bookmarks');
      }
    };

    fetchBookmarks();
  }, []);

  const handleDelete = async (id) => {
    const confirm = window.confirm('Delete this bookmark?');
    if (!confirm) return;

    try {
      const token = localStorage.getItem('token');
      await axios.delete(`/bookmarks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setBookmarks(bookmarks.filter(b => b._id !== id));
    } catch (err) {
      console.error(err);
      alert('Failed to delete bookmark');
    }
  };

  const handleAddClick = () => {
    navigate('/add');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1 className="dashboard-title">Your Bookmarks</h1>
        <button 
          className="add-button"
          onClick={handleAddClick}
        >
          Add New
        </button>
      </header>

      {bookmarks.length === 0 ? (
        <div className="empty-state">
          <p>No bookmarks saved yet. Start by adding your first bookmark!</p>
        </div>
      ) : (
        <ul className="bookmarks-grid">
          {bookmarks.map((bm) => (
            <li key={bm._id} className="bookmark-card">
              <div className="bookmark-header">
                <img 
                  src={bm.favicon} 
                  alt="" 
                  className="bookmark-favicon"
                  onError={(e) => e.target.src = '/favicon-fallback.png'}
                />
                <h3 className="bookmark-title">{bm.title}</h3>
              </div>
              
              <a 
                href={bm.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bookmark-url"
              >
                {bm.url}
              </a>
              
              <p className="bookmark-summary">{bm.summary}</p>
              
              <button 
                onClick={() => handleDelete(bm._id)}
                className="delete-button"
                title="Delete bookmark"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dashboard;

