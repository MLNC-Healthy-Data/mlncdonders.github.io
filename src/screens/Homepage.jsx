import React from "react";
import Header from "./components/Header";
import { Divider } from "@mui/material";
import CardsRow from "./components/CardsRow";
import NewsCard from "./components/NewsCard";
import NewsRow from "./components/NewsRow";

function Homepage() {
  return (
    <div>
      <Header></Header>
      <Divider></Divider>
      <CardsRow></CardsRow>
        <NewsRow></NewsRow>
    </div>
  );
}

export default Homepage;
