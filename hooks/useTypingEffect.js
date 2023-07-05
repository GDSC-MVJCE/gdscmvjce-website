import { useEffect, useRef, useState } from 'react';

export function useTypingEffect(textToType, interKeyStrokeDurationInMs) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const currentPositionRef = useRef(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('interval');
      setCurrentPosition((value) => value + 1);
      currentPositionRef.current += 1;
      if (currentPositionRef.current > textToType.length) {
        clearInterval(intervalId);
      }
    }, interKeyStrokeDurationInMs);
    return () => {
      clearInterval(intervalId);
      currentPositionRef.current = 0;
      setCurrentPosition(0);
    };
  }, [interKeyStrokeDurationInMs, textToType]);

  return textToType.substring(0, currentPosition);
}
