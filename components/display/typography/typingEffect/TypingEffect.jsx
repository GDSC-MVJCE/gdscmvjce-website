import React, { useEffect, useRef, useState } from 'react';

export function TypingEffect({
  interKeyStrokeDurationInMs,
  showCursor,
  children,
  onTypingComplete,
  className,
}) {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const intervalIdRef = useRef(null);
  const textToType = React.Children.toArray(children).join('');

  useEffect(() => {
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  useEffect(() => {
    if (currentPosition < textToType.length) {
      clearInterval(intervalIdRef.current); // Reset the interval
      intervalIdRef.current = setInterval(() => {
        setCurrentPosition((value) => {
          const newPosition = value + 1;
          if (newPosition > textToType.length) {
            clearInterval(intervalIdRef.current);
            setIsTypingComplete(true);
            onTypingComplete?.();
            return value; // Maintain the last valid position
          }
          return newPosition;
        });
      }, interKeyStrokeDurationInMs);
    }
  }, [
    interKeyStrokeDurationInMs,
    currentPosition,
    textToType,
    onTypingComplete,
  ]);

  const typedText = textToType.substring(0, currentPosition);

  return (
    <span className={className}>
      {typedText}
      {!isTypingComplete && showCursor && <span className='cursor'>|</span>}
    </span>
  );
}
