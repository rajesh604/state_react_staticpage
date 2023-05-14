import Header from '../components/Header'
import Main from '../components/Main'
import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  )
}

const body = document.querySelector('body')


export default App