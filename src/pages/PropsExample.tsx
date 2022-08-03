import React from "react";
import Rectangle from "../component/rectangle/Rectangle";
import RectangleFC, { RectangleVariant } from "../component/rectangle/RectangleFC";

const PropsExample = () => {
  return (
    <div className="container">
      <h2 className='centered'>Properties Examples</h2>
      <Rectangle width="100px" height="100px" border="5px solid grey" margin="20px auto" >
        <button className="btn marginTop35">CLICK ME</button> {/* Element will be passed in Rectangle */}
      </Rectangle>
      <div className="row">
        <div className="col">
          <RectangleFC height="65px" width="100px" variant={RectangleVariant.outlined} paddingTop="35px" onClick={() => console.log("Click at left square")}>
            <button className="btn marginCenter">CLICK ME</button>
          </RectangleFC>
        </div>
        <div className="col">
          <RectangleFC height="70px" width="110px" variant={RectangleVariant.primary} paddingTop="40px" onClick={() => console.log("Click at right square")}>
            <button className="btn marginCenter">CLICK ME</button>
          </RectangleFC>
        </div>
      </div>
    </div>
  );
}
export default PropsExample;
