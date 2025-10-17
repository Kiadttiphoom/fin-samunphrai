"use client";
import { useEffect, useState } from "react";

type Bubble = {
  id: string;
  top: string;
  left: string;
  size: number;
  color: string;
  opacity: number;
  z: number;
};

// ✅ ฟังก์ชันสร้าง id แบบง่าย (ใช้แทน randomUUID)
function randomId() {
  return Math.random().toString(36).substring(2, 9);
}

export default function RandomBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    const colors = [
      "rgba(251, 191, 36, 0.25)", // amber
      "rgba(34, 197, 94, 0.25)",  // green
      "rgba(45, 212, 191, 0.25)", // teal
      "rgba(236, 72, 153, 0.25)", // pink
      "rgba(163, 230, 53, 0.25)", // lime
    ];

    const randoms: Bubble[] = Array.from({ length: 8 }).map(() => ({
      id: randomId(), // ✅ ใช้ฟังก์ชันที่เราสร้างเอง
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 200 + Math.random() * 400,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 0.3 + Math.random() * 0.3,
      z: Math.floor(Math.random() * 3),
    }));

    setBubbles(randoms);
  }, []);

  return (
    <>
      {bubbles.map((b) => (
        <div
          key={b.id}
          className="absolute rounded-full blur-3xl pointer-events-none"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            backgroundColor: b.color,
            opacity: b.opacity,
            transform: "translate(-50%, -50%)",
            zIndex: b.z,
          }}
        />
      ))}
    </>
  );
}
