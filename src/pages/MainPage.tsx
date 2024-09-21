import { useNavigate } from "react-router-dom";
import FrameComponent from "../components/FrameComponent";
import cardsData from "../data/cards.json";
import { Card } from "../types";

export default function MainPage() {
  const navigate = useNavigate();
  const cardList: Card[] = cardsData;

  return (
    <div>
      <h1 className="text-5xl text-center pb-14">beležnica strašnih misli</h1>
      <div className="grid grid-flow-row grid-cols-3 gap-8 p-10">
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
