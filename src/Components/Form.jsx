import React from 'react';

function Form({inputText,setInputText,todos,setTodos,setStatus}) {

    const inputTextHandler=(e)=>{
        setInputText(e.target.value)
    }

    const submitTodoHandler=(e)=> {
        e.preventDefault();
        if(inputText===''){
            alert('you should addtask...')
            return false;
        }
        setTodos([
            ...todos,
            {text:inputText,completed:false,id:Math.random()}
            
        ]);

        // console.log(todos);
        alert('task is saved')
        setInputText('');
    }
    const statusHandler=(e)=>{
        setStatus(e.target.value);
    }

    return (
        <form >
            <div className='search'>
                <input value={inputText} onChange={inputTextHandler} type='text' className='todo-input' placeholder='add new task'/>
                <button onClick={submitTodoHandler} className='todo-button'>add</button>
            </div>

            <div className='select'>
                <select onChange={statusHandler} name="todos" className='filter-todo'>
                    <option value="all">all</option>
                    <option value="completed">completed</option>
                    <option value="uncompleted">uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form