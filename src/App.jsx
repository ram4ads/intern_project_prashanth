import Tab1 from './components/tab1';
import './App.css'

function App() {
  

  return (
    <div className='app-card'>
      <div>
        <img/>
        <h1>Form Heading</h1>
      </div>
      <div className='tab-container'>
        <button type='button'>Button1</button>
        <button type='button'>Button2</button>
        <button type='button'>Button3</button>
      </div>
      <Tab1/>
    </div>
  )
}

export default App
