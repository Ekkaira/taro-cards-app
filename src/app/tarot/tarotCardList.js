import React from "react";
import TarotCard from "./tarotCard";
import tarotCards from "./tarotDB";

function TarotCardList() {
  return (
    <div>
      <TarotCard
        name={tarotCards[0].name}
        suite={tarotCards[0].suite}
        image={tarotCards[0].image}
        description={tarotCards[0].description}
        interpretation={tarotCards[0].interpretation}
      />
    </div>
  );
}

export default TarotCardList;
