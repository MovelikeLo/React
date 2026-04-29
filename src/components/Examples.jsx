import { EXAMPLES } from "../data";
import Tabs from "./Tabs";


const [selectedTopic, setSelectedTopic] = useState();
  console.log("app is rendered");
  let tabContent = <p>Please select a tab</p>;
if (selectedTopic) {
  tabContent = (
    <div>
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  );
}

  
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }
  return (
    <section id="examples" title="Examples">
              <Tabs buttons={
                <>
                <TabButton isSelected={selectedTopic==="components"} onClick={() => handleSelect("components")}>Components</TabButton>
                <TabButton isSelected={selectedTopic==="jsx"} onClick={() => handleSelect("jsx")}>JSX</TabButton>
                <TabButton isSelected={selectedTopic==="props"} onClick={() => handleSelect("props")}>Props</TabButton>
                <TabButton isSelected={selectedTopic==="state"} onClick={() => handleSelect("state")}>State</TabButton>
                </>
              }>
                {tabContent}
              </Tabs>
            </section>
        );