import React from "react";

export enum RectangleVariant {
  outlined="outlined",
  primary="primary"
}

interface RectangleFCProps {
  
  // Required parameters:
  width: string;
  height: string;
  paddingTop: string,
  children?: React.ReactNode | React.ReactElement;
  variant: RectangleVariant;    // enum
  onClick: () => void;          // function without param // if required param use:  onClick: (num: number) => void
}

// Alternative to Rectangle component - passing of props
const RectangleFC: React.FunctionComponent<RectangleFCProps> = 
  ({ width, height, variant, paddingTop, children, onClick }) => {
    return (
      <div className="centeredBlock"
           style={{ width, height, paddingTop,
                    border: variant === RectangleVariant.outlined ? "5px solid black" : "none",
                    background: variant === RectangleVariant.primary ? "grey" : "" }} 
            onClick={onClick}>
        {children}
      </div>
    );
  }
export default RectangleFC;
