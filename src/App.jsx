import { CORE_CONCEPTS, EXAMPLES} from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts/CoreConcepts';
import TabButton from './components/TabButton/TabButton';
import {useState} from 'react';
import TabButtons from './components/TabButton/TabButtons';
import CoreConceptss from './components/CoreConcepts/CoreConceptss';


function App() {
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
    <>
      <Header/>
      <main>
        <CoreConceptss/>
        <TabButtons/>
      </main>
    </>
  );

}

export default App;
