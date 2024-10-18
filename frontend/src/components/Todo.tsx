import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, updateTodoById } from "../redux/TodoSlice";
import { useState } from "react";

interface TodoProps {
    todoProps: TodoType
}

const Todo = ({ todoProps }: TodoProps) => {
    const dispatch = useDispatch();
    const { id, content } = todoProps;
    const [editable, setEditable] = useState<boolean>(false);
    const [editedTodo,setEditedTodo] = useState<string>(content);

    const handleUpdateTodo = () => {
        const payload:TodoType = {
            id:id,
            content:editedTodo
        }
        dispatch(updateTodoById(payload));
        setEditable(false);

    }
    return (
        <div className="single-todo-container">
            <div>
            {editable ? <input className="todo-edited-input" type="text" value={editedTodo} onChange={(e:React.ChangeEvent<HTMLInputElement>)=> setEditedTodo(e.target.value)}/> :content}
            </div>
            <div className="single-todo-buttons-div">
                <IoIosRemoveCircleOutline onClick={() => dispatch(removeTodoById(id))} className="single-todo-buttons" />
                {editable ? <FaCheckCircle onClick={handleUpdateTodo} className="single-todo-buttons" /> : <FaRegEdit onClick={()=> setEditable(true)} className="single-todo-buttons" />}
            </div>
        </div>

    )
}

export default Todo