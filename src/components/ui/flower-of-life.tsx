import React from "react";

interface FlowerOfLifeProps {
  size?: string;
  width?: string;
  children?: React.ReactNode;
}

export const FlowerOfLife: React.FC<FlowerOfLifeProps> = ({ size = "150px", width = "100vw", children }) => {
  return (
    <div className="flower-wrapper w-full dark:border-white" style={{width: width}}>
      <div className="flower-of-life dark:border-white" style={{fontSize: size}}>
        {Array.from({ length: 19 }).map((_, i) => (
          <div key={i} className="petal" />
        ))}
      </div>
      <div className="content">{children}</div>
    </div>
  );
};