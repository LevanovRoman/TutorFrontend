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
        <div className={styles.center}>
            <h1>Login</h1>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className={styles.txt_field}>
                    <input type="email" value={email}
                           onChange={(e) => setEmail(e.target.value)} required/>
                    <span></span>
                    <label>Username</label>
                </div>
                <div className={styles.txt_field}>
                    <input type="password" value={password}
                           onChange={(e) => setPassword(e.target.value)} required/>
                    <span></span>
                    <label>Password</label>
                </div>
                <div className="pass">Forgot Password?</div>
                <input type="submit" value="Login"/>
                <div className={styles.signup_link}>Not a member? <a href="#">Signup</a></div>
            </form>
        </div>
    )

    // return (
    //     <div className="auth-container">
    //         <h2>Login</h2>
    //         {error && <p className="error-message">{error}</p>}
    //         <form onSubmit={handleSubmit}>
    //             <div>
    //                 <label>Email</label>
    //                 <input type="email" value={email}
    //                        onChange={(e) => setEmail(e.target.value)}/>
    //             </div>
    //             <div>
    //                 <label>Password</label>
    //                 <input type="password" value={password}
    //                        onChange={(e) => setPassword(e.target.value)} />
    //             </div>
    //             <button type="submit">Login</button>
    //         </form>
    //     </div>
    // )
}

export default LoginPage;