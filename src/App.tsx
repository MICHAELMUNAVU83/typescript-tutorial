
import './App.css'
import Heading from './components/Heading'
import Section from './components/Section'
import Counter from './components/Counter'
function App() {
 
  return (
    <div className="App">
      <Heading title="Hello World" />
      <Section >
        <p>My paragraph</p>
      </Section>
      <Counter />
      
    </div>
  )
}

export default App
