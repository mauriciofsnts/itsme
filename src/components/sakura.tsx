"use client";
import { sakuraIcon } from "@/lib/sakura";
import React from "react";

const SAKURA_NUM = 50;

const getRandom = (type: string): number => {
  switch (type) {
    case "x":
      return Math.random() * window.innerWidth;
    case "y":
      return Math.random() * window.innerHeight;
    case "size":
      return Math.random();
    case "rotate":
      return Math.random() * 6;
    case "dx":
      const randomX = -0.5 + Math.random() * 1;
      return 0.5 * randomX - 1.7;
    case "dy":
      return 1.5 + Math.random() * 0.7;
    case "dr":
      return Math.random() * 0.03;
    default:
      return 0;
  }
};

class Sakura {
  x: number;
  y: number;
  size: number;
  rotate: number;
  dx: number;
  dy: number;
  dr: number;

  constructor(
    x: number,
    y: number,
    size: number,
    rotate: number,
    dx: number,
    dy: number,
    dr: number
  ) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.rotate = rotate;
    this.dx = dx;
    this.dy = dy;
    this.dr = dr;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
    this.rotate += this.dr;
    if (
      this.x < 0 ||
      this.x > window.innerWidth ||
      this.y < 0 ||
      this.y > window.innerHeight
    ) {
      if (Math.random() > 0.4) {
        this.x = getRandom("x");
        this.y = 0;
      } else {
        this.x = window.innerWidth;
        this.y = getRandom("y");
      }
      this.size = getRandom("size");
      this.rotate = getRandom("rotate");
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const img = new Image();
    img.src = sakuraIcon;

    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotate);
    ctx.drawImage(img, 0, 0, 40 * this.size, 40 * this.size);
    ctx.restore();
  }
}

class SakuraList {
  list: Sakura[];
  num: number;

  constructor(num: number) {
    this.list = [];
    this.num = num;
  }

  init() {
    for (let i = 0; i < this.num; i++) {
      const sakura = new Sakura(
        getRandom("x"),
        getRandom("y"),
        getRandom("size"),
        getRandom("rotate"),
        getRandom("dx"),
        getRandom("dy"),
        getRandom("dr")
      );
      this.list.push(sakura);
    }
  }

  get(i: number): Sakura {
    return this.list[i];
  }

  size(): number {
    return this.num;
  }

  update() {
    this.list.forEach((sakura) => {
      sakura.move();
    });
  }

  draw(ctx: CanvasRenderingContext2D) {
    this.list.forEach((sakura) => {
      sakura.draw(ctx);
    });
  }
}

function SakuraAnimationComponent() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.setAttribute(
      "style",
      "position: fixed; left: 0; top: 0; z-index: 1001; opacity: 1; pointer-events: none;"
    );

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const sakuraList = new SakuraList(SAKURA_NUM);
    sakuraList.init();

    const drawFrame = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      sakuraList.update();
      sakuraList.draw(ctx);
      requestAnimationFrame(drawFrame);
    };

    drawFrame();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const img = new Image();
    img.src = sakuraIcon;

    img.onload = () => {
      handleResize();
    };

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} />;
}

export default SakuraAnimationComponent;
