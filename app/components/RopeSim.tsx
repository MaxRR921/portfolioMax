"use client";

import React, { useEffect, useRef, useState } from "react";

export default function RopeSimulation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  // Rope Configuration
  const NUM_PARTICLES = 15;
  const SEGMENT_LENGTH = 20;
  const GRAVITY = 0.2;
  const FRICTION = 0.98;
  const ITERATIONS = 5;

  // Store particles as an array of objects {x, y, prevX, prevY}
  const rope = useRef<{ x: number; y: number; prevX: number; prevY: number }[]>([]);

  // Get all text boxes dynamically
  const getTextBoxes = () => {
    return Array.from(document.querySelectorAll(".collidable")).map((el) => {
      const rect = el.getBoundingClientRect();
      return { x: rect.left, y: rect.top, width: rect.width, height: rect.height };
    });
  };

  // Initialize Rope Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { width, height } = canvas;

    // Create Rope Particles
    rope.current = Array.from({ length: NUM_PARTICLES }, (_, i) => ({
      x: width / 2,
      y: height / 4 + i * SEGMENT_LENGTH,
      prevX: width / 2,
      prevY: height / 4 + i * SEGMENT_LENGTH,
    }));

    const update = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      applyVerletIntegration();
      for (let i = 0; i < ITERATIONS; i++) {
        satisfyConstraints();
        handleCollisions();
      }
      drawRope(ctx);

      requestAnimationFrame(update);
    };

    update();
  }, []);

  // Verlet Integration (Applies Motion)
  const applyVerletIntegration = () => {
    rope.current.forEach((p, i) => {
      if (i === 0) return; // The first particle is fixed
      const velX = (p.x - p.prevX) * FRICTION;
      const velY = (p.y - p.prevY) * FRICTION;
      p.prevX = p.x;
      p.prevY = p.y;
      p.x += velX;
      p.y += velY + GRAVITY;
    });
  };

  // Satisfy Distance Constraints (Keep Rope Segments Intact)
  const satisfyConstraints = () => {
    for (let i = 0; i < NUM_PARTICLES - 1; i++) {
      const p1 = rope.current[i];
      const p2 = rope.current[i + 1];

      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const difference = (SEGMENT_LENGTH - distance) / distance;

      const offsetX = dx * difference * 0.5;
      const offsetY = dy * difference * 0.5;

      if (i !== 0) {
        p1.x -= offsetX;
        p1.y -= offsetY;
      }
      p2.x += offsetX;
      p2.y += offsetY;
    }
  };

  // Handle Collisions with Text Boxes
  const handleCollisions = () => {
    const textBoxes = getTextBoxes();
    rope.current.forEach((p) => {
      textBoxes.forEach((box) => {
        if (
          p.x > box.x &&
          p.x < box.x + box.width &&
          p.y > box.y &&
          p.y < box.y + box.height
        ) {
          p.y = box.y - 1; // Push rope outside of text box
        }
      });
    });
  };

  // Draw Rope on Canvas
  const drawRope = (ctx: CanvasRenderingContext2D) => {
    ctx.beginPath();
    ctx.moveTo(rope.current[0].x, rope.current[0].y);
    for (let i = 1; i < NUM_PARTICLES; i++) {
      ctx.lineTo(rope.current[i].x, rope.current[i].y);
    }
    ctx.strokeStyle = "black";
    ctx.lineWidth = 4;
    ctx.stroke();
  };

  // Mouse Dragging Events
  const handleMouseDown = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    rope.current.forEach((p, i) => {
      const dx = clientX - p.x;
      const dy = clientY - p.y;
      if (dx * dx + dy * dy < 400) {
        setIsDragging(true);
        setDragIndex(i);
      }
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragIndex === null) return;
    rope.current[dragIndex].x = e.clientX;
    rope.current[dragIndex].y = e.clientY;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragIndex(null);
  };

  return (
    <canvas
      ref={canvasRef}
      width={window.innerWidth}
      height={window.innerHeight}
      className="absolute top-0 left-0 pointer-events-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    />
  );
}
