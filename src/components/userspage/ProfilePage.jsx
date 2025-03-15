import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import StudentService from "../service/StudentService.jsx";
import HeaderTodo from "../TODOApp/HeaderTodo.jsx";
import Todo from "../TODOApp/Todo.jsx";
import styles from "./profilepage.module.css";
import TaskService from "../service/TaskService.jsx";
import FooterTodo from "../TODOApp/FooterTodo.jsx";
import TodoPage from "./TodoPage.jsx";

export default function ProfilePage() {
    const [profileInfo, setProfileInfo] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [taskList, setTaskList] = useState([]);

    const completedTasks = taskList.filter((todo) => todo.isCompleted).length;
    const totalTasks = taskList.length;

    useEffect(() => {
        fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async () => {
        try{
            const accessToken = localStorage.getItem('accessToken');
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

    const fetchTasks = async () => {
        try{
            const studentId = localStorage.getItem("studentId");
            const accessToken = localStorage.getItem('accessToken');
            console.log("FORM_LOC", studentId);
            const response = await TaskService.getTaskListForStudent(accessToken, studentId);
            setTaskList(response);
        }catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }
// TODO without Todo ?
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
                {/*<HeaderTodo/>*/}
                {/*{isLoading ? <p>Loading...</p> :*/}
                {/*    <Todo taskList={taskList} fetchTasks={fetchTasks}/>}*/}
                {/*<FooterTodo completedTasks={completedTasks} totalTasks={totalTasks}/>*/}
            <TodoPage/>
            </div>
        </div>

    )
}