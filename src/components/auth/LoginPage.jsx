import {useState} from "react";
import {useNavigate} from "react-router-dom";
import StudentService from "../service/StudentService.jsx";
import styles from "./loginpage.module.css";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            const userData = await StudentService.login(email, password);
            console.log(userData);
            if (userData.accessToken) {
                localStorage.setItem("accessToken", userData.accessToken);
                localStorage.setItem("role", userData.role);
                // localStorage.setItem("isAdmin", JSON.stringify(StudentService.isAdmin()));
                // localStorage.setItem("isAuthenticated", JSON.stringify(StudentService.isAuthenticated()));

                // console.log("LOGIN IS ADM", StudentService.isAdmin())
                // console.log("LOGIN IS AUTH", StudentService.isAuthenticated())
                navigate("/profile");
            }else {
                setError(userData.message);
            }
        }catch (error) {
            console.log(error);
            setError(error);
            setTimeout(() => setError(''), 5000);
        }
    }
// TODO styles for error
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
            <h1>Вход</h1>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>Username</label>
                    <input type="email" value={email}
                           onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div className={styles.formGroup}>
                    <label>Password</label>
                    <input type="password" value={password}
                           onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                {/*<div className="pass">Forgot Password?</div>*/}
                {/*<input type="submit" value="Login"/>*/}
                <button type="submit" className={styles.btn}>Войти</button>
                {/*<div className={styles.signup_link}>Not a member? <a href="#">Signup</a></div>*/}
            </form>
        </div>
        </div>
    )
}

export default LoginPage;