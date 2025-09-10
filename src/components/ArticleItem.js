// components/ArticleItem.js
import React from 'react';
import './ArticleItem.css';

export default function ArticleItem({ img, title, description, extra, label }) {
  return (
    <article className="article-item">
      {img && (
        <div className="article-image-container">
          <img src={img} alt={title} className="article-image" />
          {label && <span className="article-label">{label}</span>}
        </div>
      )}
      <h4 className="article-title">{title}</h4>
      <p className="article-description">{description}</p>
      {extra && <p className="article-extra">{extra}</p>}
    </article>
  );
}
