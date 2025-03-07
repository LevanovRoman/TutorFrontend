import {useState} from "react";
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import FooterTodo from "./FooterTodo.jsx";

export default function Todo({taskList, fetchTasks}){

    return (
        <div>
            <Form fetchTasks={fetchTasks}/>
            <TodoList taskList={taskList} fetchTasks={fetchTasks}/>
        </div>
    );
}