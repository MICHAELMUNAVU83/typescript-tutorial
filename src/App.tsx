
import './App.css'
import { useState } from 'react'
import Heading from './components/Heading'
import Section from './components/Section'
import Counter from './components/Counter'
function App() {
  const [count, setCount] = useState<number>(0)
 
  return (
    <div className="App">
      <Heading title="Hello World" />
      <Section >
        <p>My paragraph</p>
      </Section>
      <Counter setCount={setCount} >
      count={count}
      </Counter>
      
    </div>
  )
}

export default App
