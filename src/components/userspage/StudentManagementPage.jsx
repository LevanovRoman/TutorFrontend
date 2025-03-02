import {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import StudentService from "../service/StudentService.jsx";
import styles from "./studentmanagement.module.css";

export default function StudentManagementPage(){

    const [studentList, setStudentList] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try{
            const accessToken = localStorage.getItem("accessToken");
            const studentsData = await StudentService.getAllStudents(accessToken);
            setStudentList(studentsData);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    }

    const deleteStudent = async (studentId) => {
        try{
            const confirmDelete = window.confirm('Are you sure you want to delete this user?');
            if (confirmDelete) {
                const accessToken = localStorage.getItem("accessToken");
                await StudentService.deleteStudent(studentId, accessToken);
                // After deleting the user, fetch the updated list of users
                await fetchStudents();
            }
        }catch (error) {
            console.error('Error deleting user:', error);
        }
    }

    return (
        <div className={styles.studentManagementContainer}>
            <h2>Students Management Page</h2>
            <button className={styles.regButton}>
                <Link to="/register">Add User</Link>
            </button>
            <table>
                <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {studentList.map(student => (
                    <tr key={student.id}>
                        <td>{student.firstName}</td>
                        <td>{student.lastName}</td>
                        <td>{student.email}</td>
                        <td>{student.city}</td>
                        <td>{student.role}</td>
                        <td>
                            <button className={styles.deleteButton} onClick={() => deleteStudent(student.id)}>Delete</button>
                            <button>
                                <Link to={`/update-student/${student.id}`}>Update</Link>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );


}