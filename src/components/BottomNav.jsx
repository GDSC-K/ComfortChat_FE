import React from 'react';
import './BottomNav.css';
import { Home } from '../assets/icons/icon-home.png';
import { CheckedHome } from '../assets/icons/icon-home-fill.png';
import { History } from '../assets/icons/icon-book.png';
import { CheckedHistory } from '../assets/icons/icon-book-fill.png';
import { MyPage } from '../assets/icons/icon-person.png';
import { CheckedMyPage } from '../assets/icons/icon-person-fill.png';

const BottomNav = () => {
  return (
    <nav className="Nav-Wrap">
      <div className="Nav-Icon">
        <img src={History} />
      </div>
      <div className="Nav-Icon">
        <img src={Home} />
      </div>
      <div className="Nav-Icon">
        <img src={MyPage} />
      </div>
    </nav>
  );
};

export default BottomNav;
