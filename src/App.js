import { useReducer } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import TaskReducer from './reducers/TaskReducer';

function App() {
  const [tasks, dispatch] = useReducer(TaskReducer, initialTasks);

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text
    })
  }

  function handleChangeTask(task) {

  }

  function handleDeleteTask(taskId) {

  }
  return (
    <div className="App">
      {/* Reducer */}
      <h1>Prague itinerary</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false },
];
let nextId = 3;

export default App;
