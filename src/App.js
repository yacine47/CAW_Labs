import React from "react";
import ClickButton from "./components/click_button";
import ToggleButton from "./components/toggle_button";
import MultiButtonApp from "./components/mutli_button_app";
import Counter from "./components/counter";
import DisplayTab from "./components/display_tab";
import DisplayFormattedTab from "./components/display_formatted_tab";
import ClickableTab from "./components/clickable_tab";
import ParameterizedTabs from "./components/parameterized_tabs";
import AuthForm from "./components/auth_form";
import DynamicDivs from "./components/dynamic_divs";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>React Exercises</h1>
      <h2>Exercise 1</h2>
      <ClickButton />
      <ToggleButton />
      <MultiButtonApp />
      <Counter />

      <h2>Exercise 2</h2>
      <DisplayTab />
      <DisplayFormattedTab />
      <ClickableTab />
      <ParameterizedTabs />

      <h2>Exercise 3</h2>
      <AuthForm />

      <h2>Exercise 4</h2>
      <DynamicDivs />
    </div>
  );
}

export default App;
