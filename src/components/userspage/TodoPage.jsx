import styles from "./todopage.module.css";
import HeaderTodo from "../TODOApp/HeaderTodo.jsx";
import Todo from "../TODOApp/Todo.jsx";
import FooterTodo from "../TODOApp/FooterTodo.jsx";
import {useEffect, useState} from "react";
import TaskService from "../service/TaskService.jsx";

export default function TodoPage(){
    const [isLoading, setIsLoading] = useState(true);
    const [taskList, setTaskList] = useState([]);
    const completedTasks = taskList.filter((todo) => todo.isCompleted).length;
    const totalTasks = taskList.length;

    useEffect(() => {
        fetchTasks();
        setIsLoading(false);
    }, []);
    const fetchTasks = async () => {
        try{
            const studentId = localStorage.getItem("studentId");
            const accessToken = localStorage.getItem('accessToken');
            console.log("FORM_LOC", studentId);
            const response = await TaskService.getTaskListForStudent(accessToken, studentId);
            setTaskList(response);
        }catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }

    // if (isLoading) {
    //     return <div>Загрузка...</div>; // Показываем индикатор загрузки
    // }

    return (
        <div className={styles.containerTodo}>
            <div className={styles.loginTodoInner}>
                <HeaderTodo/>
                {isLoading ? <p>Loading...</p> :
                    <Todo taskList={taskList} fetchTasks={fetchTasks}/>
                }
                <FooterTodo completedTasks={completedTasks} totalTasks={totalTasks}/>
            </div>
        </div>
    )
}