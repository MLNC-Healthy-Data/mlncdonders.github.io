import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function NewsCard() {
  const imgUrl =
    "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/1200";

  return (
    <div
     className="news-card"
    >
      <img
        style={{
          width: "100%", // Ensure the image takes full width of the parent div
          height: "100%", // Ensure the image takes full height of the parent div
          objectFit: "cover",
          borderRadius: "4px", // Match the parent div's border radius
          position: "absolute",
        }}
        src={imgUrl}
        alt="News Image"
      />
      <div
      className="news-card-text-area"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
        //   width: "83%",
          padding: "1vh 2vw",
          backgroundColor: "#000000ab",
          color: "white",
          borderRadius: "0 0 10px 10px", // Match the bottom border radius of the parent div
        }}
      >
        <div>News Title</div>
        <div>Small Desc</div>
      </div>
    </div>
  );
}

export default NewsCard;
