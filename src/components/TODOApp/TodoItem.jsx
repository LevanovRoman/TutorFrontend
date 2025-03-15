import styles from "./todoitem.module.css";
import TaskService from "../service/TaskService.jsx";
import StudentService from "../service/StudentService.jsx";

export default function TodoItem({item, fetchTasks}){

    const handleDelete = async (taskId) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            await TaskService.deleteTask(accessToken, taskId);
            await fetchTasks();
        }catch (error) {
            console.error('Error delete task:', error);
        }
    }

    const handleClick = async (taskId) => {
        try {
            const accessToken = localStorage.getItem("accessToken");
            await TaskService.changeCompletedTask(accessToken, taskId);
            await fetchTasks();
        }catch (error) {
            console.error('Error change completed task:', error);
        }
    }

    const classCompleted = item.isCompleted ? styles.completed : "";

    return <div className={styles.item}>
        <div className={styles.itemName}>
            <span className={classCompleted} onClick={() => handleClick(item.id)}>{item.title}</span>
            {StudentService.adminOnly() &&
                <span>
                <button onClick={() => handleDelete(item.id)} className={styles.deleteButtonTodoList}>x</button>
            </span>}
        </div>
        <hr className={styles.line}/>
    </div>;
}