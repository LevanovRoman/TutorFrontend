import StudentService from "../service/StudentService.jsx";
import {Link} from "react-router-dom";
// import {useEffect, useState} from "react";

export default function Navbar() {

    // const [isAdmin, setIsAdmin] = useState(false);
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    //
    // useEffect(() => {
    //     setIsAuthenticated(StudentService.isAuthenticated());
    //     setIsAdmin(StudentService.isAdmin());
    // }, [isAuthenticated, isAdmin]);
    const isAdmin = StudentService.isAdmin();
    const isAuthenticated = StudentService.isAuthenticated();

    const handleLogout = () => {
        const confirmDelete = window.confirm("Are you sure you want to logout this user?");
        if (confirmDelete) {
            StudentService.logout();
        }
    }

    return (
        <nav>
            <ul>
                {!isAuthenticated && <li><Link to="/">Tutor Dev</Link></li>}
                {isAuthenticated && <li><Link to="/profile">Profile</Link></li>}
                {isAdmin && <li><Link to="/admin/student-management">Student Management</Link></li>}
                {isAuthenticated && <li><Link to="/" onClick={handleLogout}>Logout</Link></li>}
            </ul>
        </nav>
    )
}