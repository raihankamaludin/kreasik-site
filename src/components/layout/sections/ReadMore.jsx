"use client";
import { useState,useEffect, useRef } from "react";

export default function ReadMore({ text }) {
  const [open, setOpen] = useState(false);
const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      setIsClamped(el.scrollHeight > el.clientHeight);
    }
  }, [text]);


  return (
    <div>
      <p
      ref={textRef}
        className={`text-sm text-gray-600 text-justify mt-3  ${
          open ? "" : "line-clamp-1"
        }`}
      >
        {text}
      </p>
{isClamped && (
    <button
        onClick={() => setOpen(!open)}
        className="mt-1 text-sm text-[#9CAF88] hover:underline mb-4"
      >
        {open ? "Tutup" : "Selengkapnya"}
      </button>
)}
    
    </div>
  );
}
