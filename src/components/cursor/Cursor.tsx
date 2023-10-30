import React, { useEffect, useState } from "react";
import "./cursor.scss";
import { motion, useInView } from "framer-motion";

type PositionProps = {
  x: number;
  y: number;
};

function Cursor() {
  const [position, setPosition] = useState<PositionProps>({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      animate={{ x: position.x + 10, y: position.y + 10 }}
    ></motion.div>
  );
}

export default Cursor;
