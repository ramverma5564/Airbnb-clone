import React from "react";
import "./App.css";
import data from "./components/data";
import Hero from "./components/hero"
import Card from "./components/Card";
import Navbar from "./components/navbar";

export default function App() {
  const cards = data.map((item) => (
    <Card
      key={item.id}
      coverImg={item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
    />
  ));

  return (
    <>
      <Navbar />
      <Hero />
      <section className="card_list">{cards}</section>
    </>
  );
}
