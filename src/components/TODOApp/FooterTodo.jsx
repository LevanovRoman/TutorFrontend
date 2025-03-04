import styles from "./header.module.css";

export default function FooterTodo({completedTodos, totalTodos}){
    return <div className={styles.header}>
        <span className={styles.itemTodo}>Completed Tasks : 5{completedTodos}</span>
        <span className={styles.itemTodo}>Total Tasks : 15{totalTodos}</span>
    </div>
}