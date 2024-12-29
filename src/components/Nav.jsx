import { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <div className="relative overflow-hidden">
      <nav className="relative z-10">
        <div className="flex justify-between items-center bg-black p-3 text-white">
          <a href="#">LOGO</a>

          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>
      <aside
        className={`fixed top-10 right-0 h-full w-64 bg-black z-20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } text-white px-3 transition-transform`}
      >
        <ul className="space-y-4 mt-6">
          <li>
            <a
              href="#"
              className="block hover:bg-white hover:text-black rounded-md py-2 px-3"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:bg-white hover:text-black rounded-md py-2 px-3"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:bg-white hover:text-black rounded-md py-2 px-3"
            >
              Contact
            </a>
          </li>
        </ul>
      </aside>
    </div>
  );
}
