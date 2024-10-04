import React from "react";
import NewsCard from "./NewsCard";

function NewsRow() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#de6843aa",
          padding: "3vh 10vw",
          color: "white",
          fontSize: "24px",
        }}
      >
        NEWS
      </div>
      <div className="homepage-news-row">
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
        <NewsCard></NewsCard>
      </div>
    </div>
  );
}

export default NewsRow;
