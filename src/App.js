import React, { useState, useEffect } from 'react'
import './App.css'
import { Greeter } from './Greeter'
import { Borderizationator } from './Borderizationator'
import { TextGreeter } from './TextGreeter'
import { BorderedGreeter } from './BorderedGreeter'
import ReactMarkdown from 'react-markdown'

function App () {
  const [name, setName] = useState()
  const [markdown, setMarkdown] = useState()

  const [todoId, setTodoId] = useState(1)
  const [apiResult, setApiResult] = useState()

  useEffect(() => {
    setApiResult('loading...')
    setTimeout(async () => {
      var response = await window.fetch('https://jsonplaceholder.typicode.com/todos/' + todoId)
      setApiResult(await response.text())
    }, 5000)
  }, [todoId])

  return (
    <div className='App'>
      <header className='App-header'>
        <Greeter name='Sean' />
        <Greeter name='Phloid' />
      </header>
      <main>
        <Borderizationator>
          Stuff
        </Borderizationator>
        <TextGreeter name={name} setName={setName} />
        <BorderedGreeter name={name} />
        Load post number: <input type='text' value={todoId} onChange={e => setTodoId(e.target.value)} />
        <pre>{apiResult}</pre>
        <textarea value={markdown} onChange={e => setMarkdown(e.target.value)} />
        <ReactMarkdown source={markdown} />
      </main>
    </div>
  )
}

export default App
