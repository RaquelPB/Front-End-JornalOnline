// components/ArticleColumn.js
import React from 'react';
import './ArticleColumn.css';
import ArticleItem from './ArticleItem';

export default function ArticleColumn({ title, articles }) {
  return (
    <div className="article-column">
      <h3 className="column-title">{title}</h3>
      {articles.map((article, i) => (
        <ArticleItem key={i} {...article} />
      ))}
    </div>
  );
}
