import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import cardsData from "../data/cards.json";
import { Card } from "../types";

export default function MainPage() {
  const navigate = useNavigate();
  const cardList: Card[] = cardsData;

  return (
    <div className="w-full h-full max-w-screen-2xl p-6 md:p-8">
      <h1 className="text-3xl md:text-5xl text-center pb-14">
        beležnica strašnih misli
      </h1>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:p-10">
        {cardList?.map((card) => (
          <FrameComponent
            onClick={() => navigate(`/card/${card.id}`)}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
}
