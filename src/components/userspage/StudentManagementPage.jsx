import {useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import StudentService from "../service/StudentService.jsx";
import styles from "./studentmanagement.module.css";

export default function StudentManagementPage(){

    const [studentList, setStudentList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try{
            const accessToken = localStorage.getItem("accessToken");
            const studentsData = await StudentService.getAllStudents(accessToken);
            setStudentList(studentsData);
            console.log(studentsData)
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
        <div className={styles.containerManagement}>

            <h2 className={styles.title}>Список студентов</h2>

            <div className={styles.containerGrid}>
                {studentList.map(student => (
                <div className={styles.card} key={student.id}>
                    <img src="/img/IMG_95041.jpg" alt="Студент"/>
                    <h3>{student.firstName} {student.lastName}</h3>
                    <p>Возраст: 22</p>
                    <p>{student.city}</p>
                    <p>{student.email}</p>
                    <button className={styles.btnEdit} onClick={() => navigate(`/update-student/${student.id}`)}>Изменить</button>
                    <button className={styles.btnDelete} onClick={() => deleteStudent(student.id)}>Удалить</button>
                </div>
                ))}
            </div>
            <button className={styles.btnEdit} onClick={() => navigate("/register")}>
                Добавить студента
            </button>
        </div>
    );


}