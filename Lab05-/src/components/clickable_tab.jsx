import { useState } from "react";



function ClickableTab() {
    const [tab, setTab] = useState(["hello", "world", "from", "react"]);
  
    const handleClick = (indexToRemove) => {
      setTab(tab.filter((_, index) => index !== indexToRemove));
    };
  
    return (
      <ul>
        {tab.map((item, index) => (
          <li key={index} onClick={() => handleClick(index)}>
            {item}
          </li>
        ))}
      </ul>
    );
  }


export default ClickableTab;