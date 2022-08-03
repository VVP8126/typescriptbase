import React, { useRef } from "react";

const HooksExample = () => {

  // Reference at input field
  const ref = useRef<HTMLInputElement>(null);

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Entered: " + ref.current?.value);
    alert("Entered: " + ref.current?.value);
  }

  return (
    <div className="container">
      <h2 className='centered'>Reference / Hook Example</h2>
      <div className="row">
        <div className="col">
          <div className="container">
            <h4 className="centered">TS let create typed hooks</h4>
            <br />
            <input className="fullWidth" ref={ref} type="text" placeholder="Enter something here ..." />
            <button onClick={onClickHandler} className="btn marginTop35">RESULT</button>
          </div>
        </div>
        <div className="col leftBorder">
          <div className="container">
            <h4 className="centered">Code:</h4>
            <br />
            <p>1. Create typed reference:</p>
            <p className="marginLeft20">const ref = useRef&lt;HTMLInputElement&gt;(null);</p>
            <p className="marginLeft20">const onClickHandler = (e: React.MouseEvent&lt;HTMLButtonElement&gt;)</p>
            <p className="marginLeft40"> =&gt; &#123; console.log("Bla bla bla") &#125;</p>
            <br />
            <p>2. Create input with ref:</p>
            <p className="marginLeft20">&lt;input ref=&#123;ref&#125; type="text" /&gt;</p>
            <br />
            <p>3. Create handler for button:</p>
            <p className="marginLeft20">const onClickHandler = (e: React.MouseEvent&lt;HTMLButtonElement&gt;)</p>
            <p className="marginLeft40">=&gt; &#123; console.log("Bla bla bla " + ref.current?.value) &#125;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
  
export default HooksExample;
