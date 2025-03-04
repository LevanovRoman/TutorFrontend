import {useState} from "react";
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import FooterTodo from "./FooterTodo.jsx";

export default function Todo({taskList, fetchTasks}){
    // const [todos, setTodos] = useState([]);
    // const completedTodos = todos.filter((todo) => todo.done).length;
    // const totalTodos = todos.length;

    return (
        <div>
            <Form fetchTasks={fetchTasks}/>
            <TodoList taskList={taskList} fetchTasks={fetchTasks}/>
        </div>
    );
}