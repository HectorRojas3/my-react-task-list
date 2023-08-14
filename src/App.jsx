import React, {useState} from 'react';
import './App.css'
import Header from './components/header'
import TaskList from './components/TaskLIst'

function App() {
  
  return (
    <>
      <Header text={"TO-DO List"}/>
      <TaskList />
    </>
  )
}

export default App
