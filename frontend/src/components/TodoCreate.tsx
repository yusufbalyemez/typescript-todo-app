import { useState } from "react";
import { useDispatch } from "react-redux"
import { createTodo } from "../redux/TodoSlice";
import { TodoType } from "../types/Types";


const TodoCreate = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState<string>('')

    const handleCreateTodo = () => {
        if(newTodo.trim().length==0){
            alert("Todo Giriniz!")
            return;
        }
        const payload: TodoType = {
            id: Math.floor(Math.random()*9999999999999),
            content:newTodo
        }

        dispatch(createTodo(payload));
        setNewTodo('');
    }
    return (
        <div className='todo-create'>
            <input className='todo-input' type='text' placeholder='Todo giriniz...' value={newTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>setNewTodo(e.target.value)}/>
            <button onClick={handleCreateTodo} className='todo-create-button'>Oluştur</button>
        </div>
    )
}

export default TodoCreate