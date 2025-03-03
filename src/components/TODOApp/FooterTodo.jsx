import styles from "./footertodo.module.css";

export default function FooterTodo({completedTodos, totalTodos}){
    return <div className={styles.footerTodo}>
        <span className={styles.itemTodo}>Completed Todos : {completedTodos}</span>
        <span className={styles.itemTodo}>Total Todos : {totalTodos}</span>
    </div>
}