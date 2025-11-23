import './App.css';
import { use, useState } from 'react';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Add from './Components/Add';
import Tasks from './Components/Tasks';

function App() {
  const [activeTasks, setActiveTasks] = useState([]);
  const [checkedTasks, setChecked] = useState(0);
  const [sortType, setSortType]= useState('Old-New')

  return (
    <>
      < Header sortType={sortType} setSortType={setSortType} activeTasks={activeTasks} setActiveTasks={setActiveTasks} checkedTasks = {checkedTasks} setChecked={setChecked}/>
      <Nav sortType={sortType} setSortType={setSortType} activeTasks={activeTasks} setActiveTasks={setActiveTasks} checkedTasks = {checkedTasks} setChecked={setChecked}/>
      <Add sortType={sortType} setSortType={setSortType} activeTasks={activeTasks} setActiveTasks={setActiveTasks} checkedTasks = {checkedTasks} setChecked={setChecked}/>
      <Tasks sortType={sortType} setSortType={setSortType} activeTasks={activeTasks} setActiveTasks={setActiveTasks} checkedTasks = {checkedTasks} setChecked={setChecked}/>
    </>
  );
}

export default App;
