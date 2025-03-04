import './App.css';

import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import StudentManagementPage from "./components/userspage/StudentManagementPage.jsx";
import Navbar from "./components/common/Navbar.jsx";
import LoginPage from "./components/auth/LoginPage.jsx";
import ProfilePage from "./components/userspage/ProfilePage.jsx";
import RegistrationPage from "./components/auth/RegistrationPage.jsx";
import StudentService from "./components/service/StudentService.jsx";
import Footer from "./components/common/Footer.jsx";
import UpdateStudent from "./components/userspage/UpdateStudent.jsx";


function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route exact path='/' element={<LoginPage/>} />
                        <Route exact path='/login' element={<LoginPage/>} />
                        <Route path='/profile' element={<ProfilePage/>} />

                        {/* Check if user is authenticated and admin before rendering admin-only routes */}
                        {StudentService.adminOnly() && (
                            <>
                                <Route path="/register" element={<RegistrationPage />} />
                                <Route path="/admin/student-management" element={<StudentManagementPage />} />
                                <Route path="/update-student/:studentId" element={<UpdateStudent />} />
                            </>
                        )}
                        <Route path="*" element={<Navigate to="/login" />} />‰

                    </Routes>
                </div>
                {/*<Footer/>*/}
            </div>
        </BrowserRouter>
    );
}

export default App;

//TODO проверка пустой задачи
//TODO удаление задачи
//TODO подсчет выполненных и всего задач
//TODO зачеркнуть и изменить статус задачи при выполнении