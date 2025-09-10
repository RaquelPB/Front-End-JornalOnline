// components/Footer.js
import React from 'react';
import './Footer.css';

const footerSections = {
  NEWS: ['Home Page', 'U.S.', 'World', 'Politics', 'New York', 'Education', 'Sports', 'Business', 'Tech', 'Science', 'Weather', 'The Great Read', 'Obituaries', 'Headway', 'Visual Investigations', 'The Magazine'],
  ARTS: ['Book Review', 'Best Sellers Book List', 'Dance', 'Movies', 'Music', 'Pop Culture', 'Television', 'Theater', 'Visual Arts'],
  LIFESTYLE: ['Health', 'Well', 'Food', 'Restaurant Reviews', 'Love', 'Travel', 'Style', 'Fashion', 'Real Estate', 'T Magazine'],
  OPINION: ['Today’s Opinion', 'Columnists', 'Editorials', 'Guest Essays', 'Op-Docs', 'Letters', 'Sunday Opinion', 'Opinion Video', 'Opinion Audio'],
  MORE: ['Audio', 'Games', 'Cooking', 'Wirecutter', 'The Athletic', 'Jobs', 'Video', 'Graphics', 'Trending', 'Live Events', 'Corrections', 'Reader Center', 'TimesMachine', 'The Learning Network', 'School of The NYT', 'inEducation'],
  ACCOUNT: ['Subscribe', 'Manage My Account', 'Home Delivery', 'Gift Subscriptions']
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {Object.entries(footerSections).map(([section, items]) => (
          <div key={section} className={`footer-section footer-${section.toLowerCase()}`}>
            <h4 className="footer-section-title">{section}</h4>
            <ul className="footer-list">
              {items.map((item, i) => (
                <li key={i} className="footer-list-item">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        © 2025 The New York Times Company
      </div>
    </footer>
  );
}
