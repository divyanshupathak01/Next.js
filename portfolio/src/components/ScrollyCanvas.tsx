"use client";

import React, { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface ScrollyCanvasProps {
  heroRef: React.RefObject<HTMLDivElement>;
}

export default function ScrollyCanvas({ heroRef }: ScrollyCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);

  const FRAME_COUNT = 120;

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loaded = 0;

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `/sequence/frame_${paddedIndex}_delay-0.066s.webp`;
      
      img.onload = () => {
        loaded++;
        setLoadedCount(loaded);
      };
      
      loadedImages.push(img);
    }
    
    setImages(loadedImages);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useMotionValueEvent(frameIndex, "change", (latest) => {
    if (images.length < FRAME_COUNT) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const currentFrame = Math.round(latest);
    const img = images[currentFrame];
    if (!img) return;

    // Object-fit cover logic
    const canvasRatio = canvas.width / canvas.height;
    const imgRatio = img.width / img.height;
    let drawWidth, drawHeight, offsetX, offsetY;

    if (canvasRatio > imgRatio) {
      drawWidth = canvas.width;
      drawHeight = canvas.width / imgRatio;
      offsetX = 0;
      offsetY = (canvas.height - drawHeight) / 2;
    } else {
      drawWidth = canvas.height * imgRatio;
      drawHeight = canvas.height;
      offsetX = (canvas.width - drawWidth) / 2;
      offsetY = 0;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
  });

  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Trigger a re-draw
        frameIndex.set(frameIndex.get());
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex]);

  const loadingPercentage = Math.round((loadedCount / FRAME_COUNT) * 100);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden">
      {loadedCount < FRAME_COUNT && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#0d0d0d] text-white z-50">
          <p className="text-2xl font-bold tracking-widest">LOADING {loadingPercentage}%</p>
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-full object-cover"
      />
      {/* Dark overlay to make text pop more */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />
    </div>
  );
}
