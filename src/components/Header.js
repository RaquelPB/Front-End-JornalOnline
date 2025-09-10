// Header.js
import React from 'react';
import './Header.css';

const topMenuItems = ['U.S.', 'World', 'Business', 'Arts', 'Lifestyle', 'Opinion', 'Audio', 'Games', 'Cooking', 'Wirecutter', 'The Athletic'];

export default function Header() {
  return (
    <header className="header">
      {/* Linha superior: menu pequeno */}
      <nav className="top-menu">
        {topMenuItems.map((item, idx) => (
          <div key={idx} className="top-menu-item">{item}</div>
        ))}
      </nav>

      {/* Linha do meio: logo centralizada */}
      <div className="logo-container">
        <img src="/logo_theFloripaTimes.png" alt="Logo do TheFloripaTimes" />
      </div>

    </header>
  );
}
