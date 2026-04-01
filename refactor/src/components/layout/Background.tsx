import { useEffect, useRef } from 'react';

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<any[]>([]);
  const dotCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const lastFrameTimeRef = useRef<number>(0);
  const tickRef = useRef<number>(0);

  const FPS_CAP = 30;
  const FRAME_INTERVAL = 1000 / FPS_CAP;
  const NUM_STARS = window.innerWidth < 768 ? 50 : 110;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;

    let nebulaA: CanvasGradient, nebulaB: CanvasGradient;

    const buildGradients = () => {
      nebulaA = ctx.createRadialGradient(W * 0.15, H * 0.3, 0, W * 0.15, H * 0.3, W * 0.45);
      nebulaA.addColorStop(0, 'rgba(16,185,129,0.03)');
      nebulaA.addColorStop(1, 'rgba(13,13,13,0)');
      nebulaB = ctx.createRadialGradient(W * 0.8, H * 0.6, 0, W * 0.8, H * 0.6, W * 0.38);
      nebulaB.addColorStop(0, 'rgba(168,85,247,0.02)');
      nebulaB.addColorStop(1, 'rgba(13,13,13,0)');
    };

    const buildDotGrid = () => {
      const dotCanvas = document.createElement('canvas');
      dotCanvas.width = W;
      dotCanvas.height = H;
      const dotCtx = dotCanvas.getContext('2d');
      if (dotCtx) {
        dotCtx.fillStyle = 'rgba(255,255,255,0.016)';
        const sp = 60;
        for (let r = 0; r * sp <= H; r++) {
          for (let c = 0; c * sp <= W; c++) {
            dotCtx.beginPath();
            dotCtx.arc(c * sp, r * sp, 0.5, 0, Math.PI * 2);
            dotCtx.fill();
          }
        }
      }
      dotCanvasRef.current = dotCanvas;
    };

    const initStars = () => {
      starsRef.current = [];
      for (let i = 0; i < NUM_STARS; i++) {
        starsRef.current.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: Math.random() * 1.0 + 0.2,
          a: Math.random() * 0.6 + 0.1,
          sp: Math.random() * 0.2 + 0.03,
          ph: Math.random() * Math.PI * 2
        });
      }
    };

    const draw = (timestamp: number) => {
      if (timestamp - lastFrameTimeRef.current < FRAME_INTERVAL) {
        requestRef.current = requestAnimationFrame(draw);
        return;
      }
      lastFrameTimeRef.current = timestamp;

      tickRef.current += 0.005;
      ctx.fillStyle = '#0D0D0D';
      ctx.fillRect(0, 0, W, H);

      if (dotCanvasRef.current) {
        ctx.drawImage(dotCanvasRef.current, 0, 0);
      }

      ctx.fillStyle = nebulaA;
      ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = nebulaB;
      ctx.fillRect(0, 0, W, H);

      for (let i = 0; i < starsRef.current.length; i++) {
        const s = starsRef.current[i];
        const tw = s.a * (0.65 + 0.35 * Math.sin(tickRef.current * s.sp * 8 + s.ph));
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(210,228,255,${tw.toFixed(2)})`;
        ctx.fill();
      }

      requestRef.current = requestAnimationFrame(draw);
    };

    const handleResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      buildGradients();
      buildDotGrid();
      initStars();
    };

    handleResize();
    requestRef.current = requestAnimationFrame(draw);
    window.addEventListener('resize', handleResize);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Fizz Effect & Shooting Stars
  useEffect(() => {
    const effectContainer = document.createElement('div');
    effectContainer.id = 'global-effects-overlay';
    effectContainer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:-1;overflow:hidden;';
    document.body.appendChild(effectContainer);

    const style = document.createElement('style');
    style.textContent = `
      @keyframes fizz-up {
        0% { transform: translateY(0) translateX(0); opacity: 0; }
        10% { opacity: 0.4; }
        100% { transform: translateY(-110vh) translateX(var(--tx)); opacity: 0; }
      }
      @keyframes shooting-star {
        0% { transform: translateX(0) translateY(0) scale(1); opacity: 1; }
        70% { opacity: 1; }
        100% { transform: translateX(600px) translateY(600px) scale(0.1); opacity: 0; }
      }
      .shooting-star {
        position: absolute;
        width: 150px;
        height: 2px;
        background: linear-gradient(90deg, var(--cyan), transparent);
        transform: rotate(45deg);
        pointer-events: none;
        z-index: -1;
      }
    `;
    document.head.appendChild(style);

    const spawnFizz = () => {
      if (document.hidden) return;
      const f = document.createElement('div');
      const size = 2 + Math.random() * 4;
      const tx = (Math.random() * 60 - 30) + 'px';
      f.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: var(--cyan);
        opacity: 0.4;
        border-radius: 50%;
        left: ${Math.random() * 100}vw;
        bottom: -10px;
        box-shadow: 0 0 10px var(--cyan);
        animation: fizz-up ${6 + Math.random() * 6}s linear forwards;
        --tx: ${tx};
      `;
      effectContainer.appendChild(f);
      setTimeout(() => f.remove(), 12000);
    };

    const spawnStar = () => {
      if (document.hidden || window.innerWidth < 768) return;
      const s = document.createElement('div');
      s.className = 'shooting-star';
      s.style.top = (Math.random() * 45) + '%';
      s.style.left = (Math.random() * 60) + '%';
      s.style.animation = `shooting-star ${1 + Math.random() * 1}s linear forwards`;
      effectContainer.appendChild(s);
      setTimeout(() => s.remove(), 2500);
    };

    const fizzInterval = setInterval(spawnFizz, 1200);
    const starInterval = setInterval(() => {
      if (Math.random() < 0.3) spawnStar();
    }, 6000);

    return () => {
      clearInterval(fizzInterval);
      clearInterval(starInterval);
      effectContainer.remove();
      style.remove();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        background: '#0D0D0D'
      }}
    />
  );
}
