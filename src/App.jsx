import { CORE_CONCEPTS, EXAMPLES} from './data';
import Header from './components/Header/Header';
import CoreConcept from './components/CoreConcepts/CoreConcepts';
import TabButton from './components/TabButton/TabButton';
import {useState} from 'react';
// function UserData(){
//   const user = {first:"George",last:"Salayka", age:"40" };

//   return (
//     <div>
//       <h2>Name: {user.last}, {user.first}</h2>
//       <h3>Age: {user.age}</h3>
//     </div>
//   )
// }

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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              {
              ...CORE_CONCEPTS[0]
              }
            />
            <CoreConcept
              {
              ...CORE_CONCEPTS[1]
              }
            />
            <CoreConcept
              {
              ...CORE_CONCEPTS[2]
              }
            />
            <CoreConcept
              {
              ...CORE_CONCEPTS[3]
              }
            />
            {
              // CORE_CONCEPTS.map((concept)=><CoreConcept {...concept}/>)
            }
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic==="components"} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic==="jsx"} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic==="props"} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic==="state"} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
            {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
