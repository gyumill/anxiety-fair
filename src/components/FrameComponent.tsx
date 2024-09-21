import frame8 from "../assets/frame8.svg";

type FrameComponentProps = {
  text: string;
  onClick?: () => void;
};

export default function FrameComponent({ text, onClick }: FrameComponentProps) {
  return (
    <div
      className={`relative block h-52 rounded-3xl text-white ${
        onClick ? "cursor-pointer hover:bg-neutral-700" : ""
      }`}
      onClick={onClick}
    >
      <img src={frame8} alt="" className="h-full w-full" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="p-4 text-center text-xl  tracking-normal">{text}</h1>
      </div>
    </div>
  );
}
