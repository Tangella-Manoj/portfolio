import { useRef, useCallback } from 'react';

/**
 * Returns a ref + onMouseMove handler that tracks the cursor position
 * relative to the element and writes --mouse-x / --mouse-y CSS vars.
 * Works with the .card-glow CSS class for a premium radial-gradient spotlight.
 */
export function useMouseGlow<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
    el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
  }, []);

  return { ref, onMouseMove };
}
