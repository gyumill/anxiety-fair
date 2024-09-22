interface BackButtonProps {
  onClick?: () => void;
}

export default function BackButton({ onClick }: BackButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute bottom-5 left-5 p-1 rounded-md hover:bg-neutral-800"
    >
      <svg
        id="Layer_2"
        data-name="Layer 2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72.1 32.23"
        className="h-8"
      >
        <defs></defs>
        <g id="Layer_1-2" data-name="Layer 1">
          <g className="fill-white">
            <path d="m3.18,19.26c17.3-.42,34.59-1.05,51.88-1.87,4.88-.23,9.76-.48,14.64-.75,3.2-.17,3.22-5.17,0-5-17.28.94-34.57,1.68-51.87,2.21-4.88.15-9.77.29-14.65.41-3.21.08-3.22,5.08,0,5h0Z" />
            <path d="m3.69,17.11L23.34,4.72c2.71-1.71.21-6.04-2.52-4.32C14.27,4.53,7.72,8.66,1.17,12.79c-2.71,1.71-.21,6.04,2.52,4.32h0Z" />
            <path d="m2.91,18.97c6.91,3.57,13.51,7.75,19.62,12.56,1.06.83,2.5,1.03,3.54,0,.87-.87,1.07-2.7,0-3.54-6.46-5.08-13.33-9.57-20.63-13.34-1.2-.62-2.71-.31-3.42.9-.66,1.12-.31,2.8.9,3.42h0Z" />
          </g>
        </g>
      </svg>
    </button>
  );
}
