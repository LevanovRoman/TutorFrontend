import styles from "./headermain.module.css";
import StudentService from "./service/StudentService.jsx";
import {Link} from "react-router-dom";

export default function HeaderMain() {
    // const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    // const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
    const isAdmin = StudentService.isAdmin();
    const isAuthenticated = StudentService.isAuthenticated();

    const handleLogout = () => {
        const confirmDelete = window.confirm("Are you sure you want to logout this user?");
        if (confirmDelete) {
            // localStorage.setItem("isAdmin", JSON.stringify(false));
            // localStorage.setItem("isAuthenticated", JSON.stringify(false));
            StudentService.logout();
        }
    }

    return (
        <div className={styles.containerHeader}>
            <div className={styles.headerInner}>
                    <img className={styles.headerLogo} src="/img/Logo.svg" alt=""/>
                {StudentService.isAuthenticated() &&
                <div className={styles.headerWrapper}>
                        {/*{!StudentService.isAuthenticated() && <Link className={styles.headerLink} to="/">Tutor Dev</Link>}*/}
                    <Link className={styles.headerLink} to="/quiz-first">Тестирование</Link>
                    <Link className={styles.headerLink} to="/profile">Мой профиль</Link>
                    <Link className={styles.headerLink} to="/todo">Мои задания</Link>
                    {StudentService.isAdmin() && <Link className={styles.headerLink} to="/admin/student-management">Student Management</Link>}
                    <Link className={styles.headerLink} to="/" onClick={handleLogout}>Logout</Link>
                </div>
                }
            </div>
        </div>
    )
}