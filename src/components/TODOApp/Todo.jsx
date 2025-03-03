import {useState} from "react";
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import FooterTodo from "./FooterTodo.jsx";

export default function Todo({taskList, setTaskList}){
    const [todos, setTodos] = useState([]);
    const completedTodos = todos.filter((todo) => todo.done).length;
    const totalTodos = todos.length;



    return (
        <div>
            {/*<Form todos={todos} setTodos={setTodos}/>*/}
            <Form />
            {/*<TodoList todos={todos} setTodos={setTodos}/>*/}
            <TodoList taskList={taskList} setTaskList={setTaskList}/>
            <FooterTodo completedTodos={completedTodos} totalTodos={totalTodos}/>
        </div>
    );
}