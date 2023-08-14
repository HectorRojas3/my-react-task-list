import './App.css'
import Header from './components/header'
import Task from './components/Task'

function App() {
  
  const tasks = [
    {id: 1, name: 'Ver repeticion de React intro', done: true},
    {id: 1, name: 'Presentar proyecto integrador', done: false},
    {id: 1, name: 'Leer presentacion Hooks 1', done: false},
  ];
  
  const handleToggleTask = (taskId) => {

  };
  
  return (
    <>
      <Header text={"TO-DO List"}/>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggle={handleToggleTask} />
      ))}
    </>
  )
}

export default App
