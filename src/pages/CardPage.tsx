import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import FrameComponent from "../components/FrameComponent";
import ThoughtView from "../components/ThoughtView";
import cardsData from "../data/cards.json";
import { Card } from "../types";

export default function CardPage() {
  const { id } = useParams<{ id: string }>();
  const cardId = parseInt(id || "0", 10);

  const card: Card | undefined = cardsData.find((c) => c.id === cardId);
  const navigate = useNavigate();

  if (!card) {
    return <div></div>;
  }

  const thoughtCount = card.thoughts?.length;
  const checkedThoughtCount = card.thoughts?.filter(
    (thought) => thought.checked
  ).length;

  return (
    <div className="relative h-full w-full flex flex-col justify-center items-center p-5">
      <BackButton onClick={() => navigate("..")} />
      <div className="w-full max-w-md">
        <FrameComponent text={card.text} />
      </div>
      <div className="mt-20 p-5 rounded border-white border">
        <p className="text-xl border-b border-dashed border-white mb-8">
          Račun strašnih misli:
        </p>
        <div className="">
          {card.thoughts?.map((thought) => (
            <ThoughtView thought={thought} />
          ))}
        </div>

        <div className="flex gap-4 items-end justify-between border-t border-dashed border-white mt-10">
          <div className="text-lg ">Ukupan iznos za ovu godinu:</div>
          <div className="border-white w-6">{`${checkedThoughtCount}/${thoughtCount}`}</div>
        </div>
      </div>
    </div>
  );
}
