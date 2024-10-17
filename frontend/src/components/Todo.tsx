import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";

interface TodoProps {
    todoProps: TodoType
}

const Todo = ({todoProps}:TodoProps) => {
    const {id,content} = todoProps;
    return (
        <div className="single-todo-container">
            <div>{content}</div>
            <div className="single-todo-buttons-div">
                <IoIosRemoveCircleOutline className="single-todo-buttons" />
                <FaCheckCircle  className="single-todo-buttons"/>
                <FaRegEdit className="single-todo-buttons"/>
            </div>
        </div>

    )
}

export default Todo