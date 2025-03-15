import styles from "./footertodo.module.css";

export default function FooterTodo({completedTasks, totalTasks}){
    return <div className={styles.footerTodo}>
        <span className={styles.itemTodo}>Completed Tasks : {completedTasks}</span>
        <span className={styles.itemTodo}>Total Tasks : {totalTasks}</span>
    </div>
}