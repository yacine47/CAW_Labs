
import DisplayTab from "./display_tab";


function ParameterizedTabs() {
    const tab1 = ["hello", "world"];
    const tab2 = ["from", "react"];
  
    return (
      <div>
        <DisplayTab data={tab1} />
        <DisplayTab data={tab2} />
      </div>
    );
  }

export default ParameterizedTabs;