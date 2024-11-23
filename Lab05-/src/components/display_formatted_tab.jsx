

function DisplayFormattedTab() {
    const tab = ["hello", "world", "from", "react"];
  
    return (
      <ul>
        {tab.map((item, index) => (
          <li key={index}>
            Element {index + 1} is: {item}
          </li>
        ))}
      </ul>
    );
  }

export default DisplayFormattedTab;