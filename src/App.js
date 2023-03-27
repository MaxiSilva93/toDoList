import './App.css';
import ToDoList from './componentes/todolist';


function App() {
  return (
    <div className="toDoList">

      <div className='todolist-principal'>
        <h1>Mis tareas</h1>
        <ToDoList />
      </div>

    </div>
  );
}

export default App;
