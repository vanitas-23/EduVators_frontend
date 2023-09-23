// StickyHeader.js

import React from 'react';
import './Header.scss';

const StickyHeader = () => {
  return (
    <div className="sticky-header">
      <div className="logo">EduVator</div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
      </ul>
    </div>
  );
};

export default StickyHeader;
