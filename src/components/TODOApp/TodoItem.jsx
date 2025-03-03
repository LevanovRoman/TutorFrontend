import styles from "./todoitem.module.css";

export default function TodoItem({item, taskList, setTaskList}){
    function handleDelete(item) {
        // setTodos(todos.filter((todo) => todo !== item));
    }

    function handleClick(name) {
        const newArray = taskList.map((task) => task.title === name ? {...task, done: !task.isCompleted} : task);
        setTaskList(newArray);
    }
    const classCompleted = item.isCompleted ? styles.completed : "";
    return <div className={styles.item}>
        <div className={styles.itemName}>
            <span className={classCompleted} onClick={() => handleClick(item.title)}>{item.title}</span>

            <span>
            <button onClick={() => handleDelete(item)} className={styles.deleteButton}>x</button>
        </span>
        </div>
        <hr className={styles.line}/>
    </div>;
}