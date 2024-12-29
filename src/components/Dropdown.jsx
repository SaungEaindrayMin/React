import { useState } from "react";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-[300px] relative  mx-auto">
      <div className="flex justify-evenly  z-10 overflow-hidden  relative  gap-3 bg-black text-white mt-[7%]  ">
        <h1>What is React?</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
            />
          </svg>
        </button>
      </div>

      <div className={`absolute -top-48 ${isOpen ? "translate-y-48" :"translate-y-0"} bg-black text-white`}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Exercitationem aliquam necessitatibus non vitae accusantium temporibus
          autem enim officia dolorum facere blanditiis, tempore libero,
          provident rem quam expedita dicta optio dolore!
        </p>
      </div>
    </div>
  );
}
