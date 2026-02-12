"use client";
import { useState, useEffect, useRef } from "react";

export default function ReadMore({ text }) {
  const [open, setOpen] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef(null);

  // 1️⃣ Cek apakah teks kepotong (overflow)
  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    setIsClamped(el.scrollHeight > el.clientHeight);
  }, [text]);

  return (
   
    <div className="mt-3 min-h-15">
   
      <p
        ref={textRef}
        className={`text-sm text-gray-600 text-justify ${
          open ? "" : "line-clamp-1"
        }`}
      >
        {text}
      </p>

      
      <button
        onClick={() => isClamped && setOpen(!open)}
        className={`
          mt-1 text-sm text-[#9CAF88] hover:underline
          ${!isClamped ? "invisible pointer-events-none" : ""}
        `}
      >
        {open ? "Tutup" : "Selengkapnya"}
      </button>
    </div>
  );
}
