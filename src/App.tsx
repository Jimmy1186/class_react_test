import { useState } from 'react'
import ClassTest from './components/ClassTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-stone-700 text-amber-500 h-screen" >
    <ClassTest />
    </div>
  )
}

export default App
