"use client";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

// Utility function to conditionally join class names
const cn = (...classes: (string | undefined | false)[]) => {
  return classes.filter(Boolean).join(" ");
};

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  let w: number,
    h: number,
    nt: number = 0,
    animationId: number;

  // Get speed based on the provided speed prop
  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001; // Default speed if none matched
    }
  };

  // Initialize canvas and context
  const init = () => {
    const canvas = canvasRef.current;

    // Check if the canvas element exists
    if (!canvas) {
      console.error("Canvas element is null.");
      return; // Exit if canvas is not found
    }

    const ctx = canvas.getContext("2d"); // Get the 2D drawing context
    if (!ctx) {
      console.error("Failed to get canvas context.");
      return; // Exit if context is not found
    }

    // Set canvas dimensions and initial parameters
    w = ctx.canvas.width = window.innerWidth;
    h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;

    // Resize handler
    window.onresize = () => {
      w = ctx.canvas.width = window.innerWidth;
      h = ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    render(ctx); // Pass the context to render
  };

  // Draw the waves on the canvas
  const render = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = backgroundFill || "black"; // Set the fill style
    ctx.globalAlpha = waveOpacity || 0.5; // Set opacity
    ctx.fillRect(0, 0, w, h); // Fill the canvas
    drawWave(ctx, 5); // Call drawWave function
    animationId = requestAnimationFrame(() => render(ctx)); // Request the next frame
  };

  // Draw wave function
  const drawWave = (ctx: CanvasRenderingContext2D, n: number) => {
    nt += getSpeed();
    const waveColors = colors ?? [
      "#38bdf8",
      "#818cf8",
      "#c084fc",
      "#e879f9",
      "#22d3ee",
    ];

    for (let i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 40;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (let x = 0; x < w; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100; // Use const instead of var
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  // UseEffect to initialize the animation
  useEffect(() => {
    init(); // Call init to set up the canvas
    return () => {
      cancelAnimationFrame(animationId); // Clean up the animation frame
    };
  }, []); // Run once on mount

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          filter: `blur(${blur}px)`, // Apply blur filter
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
