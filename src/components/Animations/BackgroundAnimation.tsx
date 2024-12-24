// components/BackgroundAnimation.tsx
import React from 'react';

const BackgroundAnimation: React.FC = () => {
  const particles = Array.from({ length: 100 });

  return (
    <div className="container">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/221808/sky.jpg"
        alt="Background"
        className="background"
      />
      <p className="message">
        All your dreams can come true
        <br />
        if you have the courage to pursue them
      </p>
      {particles.map((_, i) => (
        <div key={i} className="circle-container">
          <div className="circle"></div>
        </div>
      ))}
    </div>
  );
};

export default BackgroundAnimation;
