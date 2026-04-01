import { useEffect, useRef } from 'react';

export function useMagnetic() {
  const ref = useRef<HTMLDivElement | HTMLAnchorElement | HTMLButtonElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.innerWidth < 768) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distanceX = clientX - centerX;
      const distanceY = clientY - centerY;

      if (Math.abs(distanceX) < width && Math.abs(distanceY) < height) {
        el.style.transform = `translate3d(${distanceX * 0.3}px, ${distanceY * 0.3}px, 0)`;
      } else {
        el.style.transform = `translate3d(0, 0, 0)`;
      }
    };

    const handleMouseLeave = () => {
      el.style.transform = `translate3d(0, 0, 0)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return ref;
}
