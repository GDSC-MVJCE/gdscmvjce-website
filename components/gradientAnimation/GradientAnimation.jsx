import React, { useEffect, useState } from "react";
import { GradientBall } from "./GradientAnimation.styled";
const getRandomNumber = (min, max) => Math.random() * (max - min) + min;
const NUM_BALLS = 4;

const GradientAnimation = () => {
  const [balls, setBalls] = useState([]);
  useEffect(() => {
    const newBalls = Array.from({ length: NUM_BALLS }, (_, index) => ({
      id: index,
      x: getRandomNumber(0, window.innerWidth),
      y: getRandomNumber(0, window.innerHeight)
    }));
    setBalls(newBalls);

    const updatePositions = () => {
      setBalls((prevBalls) =>
        prevBalls.map((ball) => ({
          ...ball,
          x: ball.x + getRandomNumber(-1, 1),
          y: ball.y + getRandomNumber(-1, 1)
        }))
      );
    };

    const interval = setInterval(updatePositions, 50);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      {balls.map((ball) => (
        <GradientBall
          key={ball.id}
          className="gradient-ball"
          style={{ left: ball.x, top: ball.y }}
        />
      ))}
    </div>
  );
};

export default GradientAnimation;
