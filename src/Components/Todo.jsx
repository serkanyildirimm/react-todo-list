import React from 'react'

function Todo({text,id,todos,setTodos,todo}) {
  const deleteHandler=()=>{
    setTodos(todos.filter((item)=>item.id!==todo.id))
  }
 
  const completeHandler=()=>{
    setTodos(todos.map((item)=>{
      if(item.id===todo.id){
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
  }


  return (
    <div className="todo">

        <button onClick={completeHandler} className="complete-btn">complete</button>
        <li className={`todo-item ${todo.completed ?"completed":" "}`}>{text}</li>
        <button onClick={deleteHandler} className='delete-btn'>delete</button> 
      
    </div>
  )
}

export default Todo