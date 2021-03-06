import React from "react";

function NewsArticle({ data }) {
  return (
    <div className="news">
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
      <span className="news__published"><a href={data.url}>{data.url}</a></span>
    </div>
  );
}

export default NewsArticle;
// This page has been created base on Reference: https://github.com/shanjairaj7/
