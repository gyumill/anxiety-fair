import { Thought } from "../types";
import CheckedIcon from "./CheckedIcon";

type ThoughtProps = {
  thought: Thought;
};

export default function ThoughtView({ thought }: ThoughtProps) {
  return (
    <div className="flex gap-4 items-end">
      <div className="p-1 text-lg border-b-white border-b flex-1">
        {thought.text}
      </div>
      <div className="border-b border-white w-6 flex justify-center pb-1">
        {thought.checked ? <CheckedIcon /> : ""}
      </div>
    </div>
  );
}
