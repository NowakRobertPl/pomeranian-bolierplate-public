import './styles.css';
import { useRef, useEffect } from 'react';

export function UseRef() {
  const pointRef = useRef();

  useEffect(() => {
    document.getElementById('root').addEventListener('mousemove', (event) => {
      console.log(event, 'event triggered');
      const { x, y } = event;

      pointRef.current.style.top = `${y}px`;
      pointRef.current.style.left = `${x}px`;
    });
  }, []);

  return (
    <>
      <div ref={pointRef} className="point">
        TEKST!
      </div>
    </>
  );
}
