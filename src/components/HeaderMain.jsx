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
        <div className={styles.wrapper}>
            <div className={styles.headerMain}>
                <div className="logo">Логотип</div>
                <nav>
                    <ul className={styles.listMenu}>
                        {!isAuthenticated && <li><Link to="/">Tutor Dev</Link></li>}
                        {isAuthenticated && <li><Link to="/quiz">Quiz</Link></li>}
                        {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
                        {isAdmin && <li><Link to="/admin/student-management">Student Management</Link></li>}
                        {isAuthenticated && <li><Link to="/" onClick={handleLogout}>Logout</Link></li>}
                    </ul>
                </nav>
            </div>
        </div>
    )
}