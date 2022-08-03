import React, { useState } from "react";

const Nav2Example: React.FunctionComponent = () => {
  
  const [value, setValue] = useState<string>("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if(value) {
      console.log("Entered: " + value);
      alert("Entered: " + value);
    }
    else {
      console.log("Nothing was entered !");
      alert("Nothing was entered !");
    }
  }

  const [isDrag, setIsDrag] = useState(false);

  const dragHandler = (e:React.DragEvent<HTMLDivElement>) => {
    console.log("Drag event occured !");
  }

  const leaveHandler = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("Element left square !");
    setIsDrag(false);
  }

  const dropHandler = (e:React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    console.log("Drop event occured !");
    setIsDrag(false);
  }

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  }

  return (
    <div className="container">
      <h2 className='centered'>Events Examples</h2>
      <br/>
      <div className="row">
        <div className="col">
          <h4 className="centered">Enter sentence and click button</h4>
          <br />
          <input type="text" onChange={changeHandler} className="fullWidth" placeholder="Your sentence ...." />
          <br />
          <button className="btn marginCenter" onClick={clickHandler}>ENTER</button>
        </div>
        <div className="col leftBorder">
          <h4 className="centered">TS let create typed Events</h4>
          <div className="container">
            <p>1. Create typed event:</p>
            <p className="marginLeft20">const [value, setValue] = useState&lt;string&gt;("");</p>
            <br />
            <p>2. Create handlers for input=text and button:</p>
            <br/>
            <p className="marginLeft20">const changeHandler = (e: React.ChangeEvent&lt;HTMLInputElement&gt;)</p>
            <p className="marginLeft20">=&gt; &#123; setValue(e.target.value)&#125;</p>
            <br/>
            <p className="marginLeft20">const clickHandler = (e: React.MouseEvent&lt;HTMLButtonElement&gt;)</p>
            <p className="marginLeft20">=&gt; &#123; console.log("Bla bla bla")&#125;</p>
            <br />
            <p>3. Use handler:</p>
            <p className="marginLeft20">&lt;input type="text" onChange=&#123;changeHandler&#125; /&gt;</p>
            <p className="marginLeft20">&lt;button onClick=&#123;clickHandler&#125;&gt;ENTER&lt;/button&gt;</p>
          </div>
        </div>
      </div>
      <br />
      <h2 className='centered'>Examples with Drag-and-Drop Events</h2>
      <br/>
      <div className="row">
        <div className="col">
          <h4 className="centered">Drag left (black) square on right one and drop</h4>
          <br />
          <div draggable onDrag={dragHandler} className="blackSquare"></div>
          <div  onDrop={dropHandler} 
                onDragLeave={leaveHandler} 
                onDragOver={dragWithPreventHandler} 
                className="greySquare"
                style={{backgroundColor: isDrag ? "grey" : "lightgrey"}}></div>
        </div>
        <div className="col leftBorder">
          <h4 className="centered">Using of typed events</h4>
          <br/>
          <div className="container">
            <p>1. Create variable for storing Drag-nad-Drop position:</p>
            <p className="marginLeft20">const [isDrag, setIsDrag] = useState(false);</p>
            <br />
            <p>2. Add event listeners:</p>
            <p className="marginLeft20">const dragHandler = (e:React.DragEvent&lt;HTMLDivElement&gt;) =&gt; &#123;</p>
            <p className="marginLeft40">console.log("Drag event occured !");</p>
            <p className="marginLeft20">&#125;</p>
            <p className="marginLeft20">const leaveHandler = (e:React.DragEvent&lt;HTMLDivElement&gt;) =&gt; &#123;</p>
            <p className="marginLeft40">e.preventDefault();</p>
            <p className="marginLeft40">console.log("Element left square !");</p>
            <p className="marginLeft40">setIsDrag(false);</p>
            <p className="marginLeft20">&#125;</p>
            <p className="marginLeft20">const dropHandler = (e:React.DragEvent&lt;HTMLDivElement&gt;) =&gt; &#123;</p>
            <p className="marginLeft40">e.preventDefault();</p>
            <p className="marginLeft40">console.log("Drop event occured !");</p>
            <p className="marginLeft40">setIsDrag(false);</p>
            <p className="marginLeft20">&#125;</p>
            <p>3. Use handlers:</p>
            <p className="marginLeft20">Left square: &lt;div draggable onDrag=&#123;dragHandler&#125;&gt;&lt;/div&gt;</p>
            <p className="marginLeft20">Right square:</p>
            <p className="marginLeft20">&lt;div  onDrop=&#123;dropHandler&#125;</p>
            <p className="marginLeft40">onDragLeave=&#123;leaveHandler&#125;</p> 
            <p className="marginLeft40">onDragOver=&#123;dragWithPreventHandler&#125;</p>
            <p className="marginLeft40">style=&#123;&#123;backgroundColor: isDrag ? "grey" : "lightgrey"&#125;&#125;&gt;&lt;/div&gt;</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav2Example;
