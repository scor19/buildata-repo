import React from "react";
import Card from "./Card";

export const Cards = () => {
  const image =
    "https://images.unsplash.com/photo-1580757468214-c73f7062a5cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8MTYlM0E5fGVufDB8fDB8fHww&w=1000&q=80";
  const cards = [
    {
      id: 1,
      title: "La noticia",
      image: image,
    },
    {
      id: 2,
      title: "La otra noticia",
      image: image,
    },
    {
      id: 3,
      title: "La otra otra noticia",
      image: image,
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        {cards.map((card) => (
          <div className="" key={card.id}>
            <Card title={card.title} image={card.image} />
          </div>
        ))}
      </div>
    </div>
  );
};
