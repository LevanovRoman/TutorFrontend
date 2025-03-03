import TodoItem from "./TodoItem.jsx";
import styles from "./todolist.module.css"

export default function TodoList({taskList, setTaskList}){
    const sortedTodos = taskList.slice().sort((a,b)=>(Number(a.isCompleted)-Number(b.isCompleted)));
    return(
        <div className={styles.list}>
            {sortedTodos.map((item) => (
                <TodoItem key={item.id} item={item} taskList={taskList} setTaskList={setTaskList}/>
            ))}
        </div>
    )
}