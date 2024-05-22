import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, deleteAll, remove, updatedtodo } from './CreateSlice'


function App() {
  const [Edit,setEdit] = useState(false)
  const [editTodo, setEditTodo] = useState('')
  const [editvalue, setEditvalue] = useState("")
  const dispatch = useDispatch()
  const [todoValue, setTodovalue] = useState("")
  const todos = useSelector((state)=>state.TodoReducer)
  console.log(todos);

const handleSubmit = (e) =>{
 e.preventDefault()
 let date = new Date();
 let time = date.getTime();
 let todoObj={
     id: time,
     todo: todoValue,
     completed: false
 }
 setTodovalue('');
 dispatch(addTodo(todoObj))
}




const RemoveTodo =(id) =>{
  dispatch(remove(id))
}






const handleEdit = (todo) =>{
  setEdit(true)
  setEditTodo(todo)
}






useEffect(()=>{
  setEditvalue(editTodo.todo)
},[editTodo])



const backBtn = () =>{
  setEdit(false)
}


const editSub  = (e) =>{
e.preventDefault()
let editedObj = {
  id: editTodo.id,
  todo : editvalue,
  completed: false
}
dispatch(updatedtodo(editedObj))
}

  return (
    <>
     {Edit === false ? ( <form className='form' onSubmit={handleSubmit}>
<label>Todo</label>
<div className='input-and-btn'>
  <input type='' className='form-control'
  value={todoValue} 
  onChange={(e)=>setTodovalue(e.target.value)}
  />
  <button type='submit'>Add</button>
  <div>
    {todos.map((todo)=>
  {
    return(
      <div className='check'>     
        <input type='checkbox' checked={todo.completed}/>
        <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>   
            <p className='edit'
            onClick={()=>handleEdit(todo)}
            >🖊️</p>
            <p className='edit'
            onClick={()=>RemoveTodo(todo.id)}
            >🗑️</p>
           
              </div>
    )
  })}
    {todos.length > 0 && (
              <button onClick={()=>dispatch(deleteAll())}>Delete All</button>
            )}
  </div>
</div>
      </form>) : ( <form className='form' onSubmit={handleSubmit}>
<label>Todo</label>
<div className='input-and-btn'>
  <input type='' className='form-control'
  value={editvalue} onChange={(e)=>setEditvalue(e.target.value)}
  />
  <button type='submit'>Update</button>
  <div>
    {todos.map((todo)=>
  {
    return(
      <div className='check'>     
        <input type='checkbox' checked={todo.completed}/>
        <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>   
            <p className='edit'
            onClick={editSub}
            >🖊️</p>
            <p className='edit'
            onClick={()=>RemoveTodo(todo.id)}
            >🗑️</p>
           
              </div>
    )
  })}
    {todos.length > 0 && (
              <button onClick={()=>dispatch(deleteAll())}>Delete All</button>
            )}
  </div>
</div>
      </form>)}
      <button onClick={backBtn}>back</button>

    </>
  )
}

export default App



































{/* <form className='form' onSubmit={handleSubmit}>
<label>Todo</label>
<div className='input-and-btn'>
  <input type='' className='form-control'
  value={todoValue} onChange={(e)=>setTodovalue(e.target.value)}
  />
  <button type='submit'>Add</button>
  <div>
    {todos.map((todo)=>
  {
    return(
      <div className='check'>     
        <input type='checkbox' checked={todo.completed}/>
        <p style={todo.completed===true?{textDecoration:'line-through'}:{textDecoration:'none'}}>
                {todo.todo}
            </p>   
            <p className='edit'
            onClick={()=>handleEdit()}
            >🖊️</p>
            <p className='edit'
            onClick={()=>RemoveTodo(todo.id)}
            >🗑️</p>
           
              </div>
    )
  })}
    {todos.length > 0 && (
              <button onClick={()=>dispatch(deleteAll())}>Delete All</button>
            )}
  </div>
</div>
      </form> */}
