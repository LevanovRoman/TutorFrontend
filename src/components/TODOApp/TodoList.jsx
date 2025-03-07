import TodoItem from "./TodoItem.jsx";
import styles from "./todolist.module.css"

export default function TodoList({taskList, fetchTasks}){
    const sortedTodos = taskList.slice().sort((a,b)=>(Number(a.isCompleted)-Number(b.isCompleted)));
    return(
        <div className={styles.list}>
            {sortedTodos.map((item) => (
                <TodoItem key={item.id} item={item} fetchTasks={fetchTasks}/>
            ))}
        </div>
    )
}