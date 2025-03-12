import {Navigate, Route, Routes} from "react-router-dom";
import HeaderMain from "./components/HeaderMain.jsx";
import FooterMain from "./components/FooterMain.jsx";
import LoginPage from "./components/auth/LoginPage.jsx";
import ProfilePage from "./components/userspage/ProfilePage.jsx";
import StudentService from "./components/service/StudentService.jsx";
import RegistrationPage from "./components/auth/RegistrationPage.jsx";
import StudentManagementPage from "./components/userspage/StudentManagementPage.jsx";
import UpdateStudent from "./components/userspage/UpdateStudent.jsx";
import QuizStart from "./components/Quiz/QuizStart.jsx";
import QuizFirst from "./components/Quiz/QuizFirst.jsx";

function App() {

    return (
      <div className="wrapper">
          <HeaderMain />
          {/*<div className="content">*/}
              <Routes>
                  <Route exact path='/' element={<LoginPage />} />
                  <Route exact path='/login' element={<LoginPage />} />
                  <Route path="/profile" element={<ProfilePage />}/>
                  <Route path="/quiz-start" element={<QuizStart />}/>
                  <Route path="/quiz-first" element={<QuizFirst />}/>
                  {/*<Route path="*" element={<NotFound/>}/>*/}

                  {StudentService.adminOnly() && (
                      <>
                          <Route path="/register" element={<RegistrationPage />} />
                          <Route path="/admin/student-management" element={<StudentManagementPage />} />
                          <Route path="/update-student/:studentId" element={<UpdateStudent />} />
                      </>
                  )}
                  <Route path="*" element={<Navigate to="/login" />} />
              </Routes>
          <FooterMain/>
          {/*</div>*/}
      </div>

  )
}

export default App

//TODO проверка пустой задачи
//TODO exact ?
//TODO проверка пароля
