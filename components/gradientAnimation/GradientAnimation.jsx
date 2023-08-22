"use-client";
import React, { useEffect, useState } from "react";
import { GradientBall, GradientContainer } from "./GradientAnimation.styled";

const NUM_BALLS = 4;
const BALL_SIZE = 250;
const MIN_DISTANCE = 280; // Minimum distance between balls
const BALL_SPEED = 0.7;

const getRandomNumber = (min, max) => Math.random() * (max - min) + min;

const distanceBetween = (x1, y1, x2, y2) =>
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

const GradientAnimation = () => {
  const [balls, setBalls] = useState([]);
  useEffect(() => {
    const newBalls = Array.from({ length: NUM_BALLS }, (_, index) => ({
      id: index,
      x: getRandomNumber(0, window.innerWidth - BALL_SIZE),
      y: getRandomNumber(0, window.innerHeight - BALL_SIZE),
      dx: getRandomNumber(-0.1, 0.1),
      dy: getRandomNumber(-0.1, 0.1)
    }));
    setBalls(newBalls);
    const animateBalls = () => {
      setBalls((prevBalls) =>
        prevBalls.map((ball) => {
          let dx = ball.dx;
          let dy = ball.dy;

          const maxX = window.innerWidth - BALL_SIZE;
          const maxY = window.innerHeight - BALL_SIZE;

          let x = ball.x + dx * BALL_SPEED;
          let y = ball.y + dy * BALL_SPEED;

          // Check boundaries and reverse direction
          if (x < 0 || x > maxX) {
            dx = -dx;
            x = Math.max(0, Math.min(x, maxX));
          }
          if (y < 0 || y > maxY) {
            dy = -dy;
            y = Math.max(0, Math.min(y, maxY));
          }
          prevBalls.forEach((otherBall) => {
            if (otherBall.id !== ball.id) {
              const dist = distanceBetween(x, y, otherBall.x, otherBall.y);
              if (dist < MIN_DISTANCE) {
                // Move slightly away from the other ball
                dx += (ball.x - otherBall.x) * 0.001;
                dy += (ball.y - otherBall.y) * 0.001;
              }
            }
          });

          return { ...ball, x, y, dx, dy };
        })
      );

      requestAnimationFrame(animateBalls);
    };

    const animationId = requestAnimationFrame(animateBalls);
    return () => cancelAnimationFrame(animationId);
  }, []);
  return (
    <GradientContainer>
      {balls.map((ball) => (
        <GradientBall
          key={ball.id}
          ballNo={ball.id + 1}
          className="gradient-ball"
          style={{
            left: ball.x + "px",
            top: ball.y + "px"
          }}
        />
      ))}
    </GradientContainer>
  );
};

export default GradientAnimation;
