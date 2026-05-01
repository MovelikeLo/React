import { EXAMPLES } from "../data.js";
import Tabs from "./Tabs.jsx";
import TabButton from "./TabButton/TabButton";
import { useState } from "react";
import Section from "./Section.jsx";

export default function Examples() {
const [selectedTopic, setSelectedTopic] = useState();
  console.log("app is rendered");

function handleSelect(selectedButton) {
  setSelectedTopic(selectedButton);
  console.log(tabContent);
}
  let tabContent = <p>Please select a tab</p>;
if (selectedTopic) {
  tabContent = <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  }
  return (
    <Section id="examples" title="Examples">
              <Tabs 
              buttonsContainer="div"
              buttons={
                <>
                <TabButton isSelected={selectedTopic==="components"} onClick={() => handleSelect("components")}>Components</TabButton>
                <TabButton isSelected={selectedTopic==="jsx"} onClick={() => handleSelect("jsx")}>JSX</TabButton>
                <TabButton isSelected={selectedTopic==="props"} onClick={() => handleSelect("props")}>Props</TabButton>
                <TabButton isSelected={selectedTopic==="state"} onClick={() => handleSelect("state")}>State</TabButton>
                </>
              }>
                {tabContent}
              </Tabs>
            </Section>
        )
}