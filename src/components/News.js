import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";
import Footer from "./Footer";

function News(props) {
  const    data    = useContext(NewsContext);
  console.log(data);

  return (
    <div>
      <h1 className="head__text">Plastic Polution News</h1>
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArticle data={news} key={news.url} />
            ))
          : "Loading"}
      </div>
      <Footer />
    </div>
  );
}

export default News;
// This page has been created base on Reference: https://github.com/shanjairaj7/
