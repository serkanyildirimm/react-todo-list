import './App.css';

import React,{ useState,useEffect} from 'react';
import Form from './Components/Form';
import TodoList from './Components/TodoList';

function App() {

  const [inputText,setInputText]=useState('');
  const [todos,setTodos]=useState([]);
  const [status,setStatus]=useState('all');
  const [filteredTodos,setFilteredTodos]=useState([]);

  useEffect(()=>{
    getLocalTodos();
  },[])

  useEffect(()=>{
    filterHandler(todos)
    saveLocalTodos();
  },[todos,status])

  
  const filterHandler=()=>{
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo)=>todo.completed===true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo)=>todo.completed===false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  const saveLocalTodos=()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const getLocalTodos=()=>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify(todos));
    }
    else{
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }


  return (
    <div className="App">
      <header>
        <h1>my TODO list</h1>
      </header>
      <Form 
      inputText={inputText}
      setInputText={setInputText}
      todos={todos}
      setTodos={setTodos}
      setStatus={setStatus}
      />
      <TodoList 
      todos={todos}
      setTodos={setTodos} 
      filteredTodos={filteredTodos}
      />
    </div>
  );
}

export default App;
