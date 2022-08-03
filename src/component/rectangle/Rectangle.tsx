import React from "react";

// It's possible to create Elements with typed properties
interface RectangleProps {
  width: string;
  height: string;
  border: string;
  margin: string;
  
  // Ensures passing of element in component Rectangle
  children?: React.ReactNode | React.ReactElement; // children? - optional elem, children - required elem
}

// Passed typed properties from parent element
const Rectangle = ({width, height, border, margin, children}:RectangleProps) => {
  return (
    <div style={{width, height, border, margin}}> {children} </div>
  );
}
export default Rectangle;