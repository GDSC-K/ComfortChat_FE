import React from 'react';
import './BottomNav.css';
import Home from '../assets/icons/icon-home.png';
import CheckedHome from '../assets/icons/icon-home-fill.png';
import History from '../assets/icons/icon-book.png';
import CheckedHistory from '../assets/icons/icon-book-fill.png';
import MyPage from '../assets/icons/icon-person.png';
import CheckedMyPage from '../assets/icons/icon-person-fill.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const BottomNav = () => {
  return (
    <nav className="Nav-Wrap">
      <Link to="/recentView" style={{ textDecoration: 'none' }}>
        <div className="Nav-Icon">
          <img src={History} />
        </div>
      </Link>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="Nav-Icon">
          <img src={Home} />
        </div>
      </Link>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <div className="Nav-Icon">
          <img src={MyPage} />
        </div>
      </Link>
    </nav>
  );
};

export default BottomNav;
