
import styles from "./form.module.css";
import TaskService from "../service/TaskService.jsx";
import {useState} from "react";

export default function Form({fetchTasks}){
    const [task, setTask] = useState("");
    const studentId = localStorage.getItem("studentId");
    const accessToken = localStorage.getItem("accessToken");

    function handleSubmit(e){
        e.preventDefault();
        addTaskToStudent(task);
        setTask("");
    }

    const addTaskToStudent = async (taskNew) => {
        try {
            console.log("task", taskNew);
            // const accessToken = localStorage.getItem("accessToken");
            await TaskService.addTaskToStudent(accessToken, studentId, taskNew);
            await fetchTasks();
        }catch (error) {
            console.error('Error add task to student:', error);
        }
    }

    return (
        <form className={styles.todoForm} onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
                <input className={styles.modernInput}
                       onChange={(e) => setTask(e.target.value)}
                       value={task}
                       type="text"
                       placeholder="Enter todo item..."/>
                <button className={styles.modernButton} type="submit">Add</button>
            </div>
        </form>
    );
}