import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import StudentService from "../service/StudentService.jsx";
import Header from "../TODOApp/Header.jsx";
import Todo from "../TODOApp/Todo.jsx";
import styles from "./profilepage.module.css";
import TaskService from "../service/TaskService.jsx";

export default function ProfilePage() {
    const [profileInfo, setProfileInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [taskList, setTaskList] = useState([]);
    const accessToken = localStorage.getItem('accessToken');

    useEffect(() => {
        fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async () => {
        try{
            const response = await StudentService.getYourProfile(accessToken);
            localStorage.setItem("studentId", response.id);
            setProfileInfo(response);
            fetchTasks(response.id);
        } catch (error) {
            console.error('Error fetching profile information:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const fetchTasks = async (studentId) => {
        try{
            // const studentId = localStorage.getItem("studentId");
            console.log("FORM_LOC", studentId);
            const response = await TaskService.getTaskListForStudent(accessToken, studentId);
            setTaskList(response);
        }catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }

    return (
        <div>
            <div className={styles.profilePageContainer}>
                <h2>Profile Information</h2>
                <p>First Name: {profileInfo.firstName}</p>
                <p>Last Name: {profileInfo.lastName}</p>
                <p>Email: {profileInfo.email}</p>
                <p>City: {profileInfo.city}</p>
                <p>Role: {profileInfo.role}</p>
                {profileInfo.role === "ADMIN" && (
                    <button><Link to={`/update-student/${profileInfo.id}`}>Update This Profile</Link></button>
                )}
            </div>
            <div className={styles.profileTodoContainer}>
                <Header/>
                {isLoading ? <p>Loading...</p> :
                    <Todo taskList={taskList} setTaskList={setTaskList}/>}

            </div>
        </div>

    )
}