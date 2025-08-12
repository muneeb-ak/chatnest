"use client";

import { useRef, useState, useEffect } from "react";

const testimonialsData = [
  {
    name: "Sara K.",
    message:
      "ChatNest keeps me connected with friends across the globe. The app is smooth and private.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "David M.",
    message:
      "I love how quick the messages sync and how easy it is to join communities.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Nina L.",
    message:
      "The clean interface makes chatting enjoyable. No distractions, just great conversations.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Alex P.",
    message:
      "Voice messaging is a game changer! ChatNest really thought about user experience.",
    image: "https://randomuser.me/api/portraits/men/43.jpg",
  },
  {
    name: "Maria T.",
    message:
      "Secure, fast, and reliable. I trust ChatNest with my private conversations.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "James R.",
    message:
      "The best chat app I’ve used — fast, reliable, and super easy to use.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "Emily W.",
    message:
      "Love the clean UI and smooth experience. Makes chatting fun and effortless.",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    name: "Michael B.",
    message:
      "Syncing messages across devices is flawless. Never miss a chat.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Olivia C.",
    message:
      "Joining communities and finding new friends has never been easier.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    name: "Daniel K.",
    message:
      "Privacy-focused and feature-rich. ChatNest nailed it with this app.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Drag handlers
  const onMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };
  const onMouseLeave = () => setIsDragging(false);
  const onMouseUp = () => setIsDragging(false);
  const onMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Disable vertical wheel scroll inside container to prevent accidental scrolling (optional)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const wheelHandler = (e) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        e.preventDefault();
      }
    };
    el.addEventListener("wheel", wheelHandler, { passive: false });
    return () => el.removeEventListener("wheel", wheelHandler);
  }, []);

  // Scroll left/right on arrow button click
  const scrollByOffset = (offset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: offset, behavior: "smooth" });
    }
  };


  
  return (
    <>
      <section  id="tests"  className="bg-gradient-to-br from-gray-950 to-indigo-900 py-24  w-full">
        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-white drop-shadow-lg">
            What Our Users Say
          </h2>

          <div className="relative">
            {/* Left arrow - visible on md+ */}
            <button
              onClick={() => scrollByOffset(-320)}
              aria-label="Scroll Left"
              className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 bg-indigo-700 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full p-3 shadow-lg z-10 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right arrow - visible on md+ */}
            <button
              onClick={() => scrollByOffset(320)}
              aria-label="Scroll Right"
              className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 bg-indigo-700 bg-opacity-70 hover:bg-opacity-90 text-white rounded-full p-3 shadow-lg z-10 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Scrollable testimonials */}
            <div
              ref={scrollRef}
              className="flex space-x-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4 cursor-grab"
              tabIndex={0}
              onMouseDown={onMouseDown}
              onMouseLeave={onMouseLeave}
              onMouseUp={onMouseUp}
              onMouseMove={onMouseMove}
              style={{ scrollPaddingLeft: "1rem", scrollPaddingRight: "1rem" }}
            >
              {testimonialsData.map(({ name, message, image }, idx) => (
                <div
                  key={idx}
                  className="snap-start flex-shrink-0 w-80 bg-gray-800 rounded-3xl p-6 shadow-lg hover:shadow-indigo-600/70 transition duration-300 cursor-default select-text flex flex-col"
                >
                  <div className="flex items-center mb-4">
                    <img
                      src={image}
                      alt={`${name} avatar`}
                      className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500"
                      loading="lazy"
                    />
                    <p className="ml-4 font-semibold text-indigo-400 text-lg">{name}</p>
                  </div>
                  <p className="text-gray-300 italic leading-relaxed text-base flex-grow">
                    "{message}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hide scrollbar style */}
      <style jsx>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .overflow-x-auto {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        /* Cursor style when dragging */
        .cursor-grab:active {
          cursor: grabbing;
        }
      `}</style>
            <section className="bg-gradient-to-br from-indigo-900 to-black py-20 px-4 text-center">
        <h2 className="text-white  text-3xl sm:text-4xl font-bold mb-4">Start chatting with the world</h2>
        <p className="text-gray-200 mb-6 text-base sm:text-lg">
          No installation needed — just sign in and connect instantly.
        </p>
        <a
          href="/nests"
          className="bg-white text-indigo-700 font-semibold px-8 py-3 rounded-full text-lg hover:bg-gray-100 transition inline-block"
        >
          🚀 Launch ChatNest
        </a>
      </section>

    </>
  );
}
