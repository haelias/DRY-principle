import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'
const options = [
   {
    name:'what?',
    body:'This is option 1, and this text is stored inside object which is then mapped. This leads to less repetition in the code. all the options and its content takes up one line in JSX. The text here is stored in a useState hook and changes based on which element you click.'
  },
   {
    name:'why?',
    body:'it was fun to do, i will probably also implement this method in projects which would usually require lots of repeated elements'
  },
  {
    name:'worth it?',
    body:'Debatable... This has also probably been done before but the concept is still cool in my eyes'
  },
  {
    name:'Info',
    body:'https://github.com/haelias'
  },
  {
    name:'test'
  },
]

function App() {

  const [text, setText] = useState()
  const [title, setTitle] = useState('Changable elements from mapped object list')

 const optionElements = options.map(items => {
    return <h1 key = {items.name} onClick={() => {
    if (items.body) { setText(items.body)} else setText('this is a failsafe because the property doesnt exist in this object')
    setTitle(items.name)
    }}>{items.name}</h1>
  })

  return (
    <div className="App">
      <h1>Method to not repeat yourself in jsx</h1>
      <div className='container'>
        <div className='window'><p>{title}</p></div>
        <div className='body'></div>
        <div className='options'>
        {optionElements}
        </div>
        <div className='content'>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
