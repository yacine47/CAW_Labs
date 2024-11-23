
import { useState } from "react";

function DynamicDivs() {
    const [divs, setDivs] = useState([]);
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");
    const [color, setColor] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setDivs([...divs, { height, width, color }]);
      setHeight("");
      setWidth("");
      setColor("");
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <input
            type="text"
            placeholder="Width"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
          />
          <input
            type="text"
            placeholder="Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button type="submit">Add Div</button>
        </form>
        <div>
          {divs.map((div, index) => (
            <div
              key={index}
              style={{
                height: `${div.height}px`,
                width: `${div.width}px`,
                backgroundColor: div.color,
              }}
            />
          ))}
        </div>
      </div>
    );
  }


export default DynamicDivs;