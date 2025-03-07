import {useNavigate} from "react-router-dom";
import {useState} from "react";
import StudentService from "../service/StudentService.jsx";
import styles from "./registrationpage.module.css";

export default function RegistrationPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        city: "",
        role: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
// TODO проверка пароля
    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const  accessToken = localStorage.getItem("accessToken");
            await StudentService.register(formData, accessToken);
            // Clear the form fields after successful registration
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                passwordConfirm: "",
                city: "",
                role: ""
            });
            alert('User registered successfully');
            navigate('/admin/user-management');

        }catch (error) {
            console.error('Error registering user:', error);
            alert('An error occurred while registering user');
        }
    }

    return (
        <div className={styles.authContainer}>
            <h2>Регистрация</h2>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName}
                    onChange={handleInputChange} required={true} />
                </div>
                <div className={styles.formGroup}>
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName}
                           onChange={handleInputChange} required={true} />
                </div>
                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email}
                           onChange={handleInputChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password}
                           onChange={handleInputChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Password Confirm</label>
                    <input type="password" name="passwordConfirm" value={formData.passwordConfirm}
                           onChange={handleInputChange} required />
                </div>
                <div className={styles.formGroup}>
                    <label>Role</label>
                    <input type="text" name="role" value={formData.role} onChange={handleInputChange}
                           placeholder="Enter your role" required />
                </div>
                <div className={styles.formGroup}>
                    <label>City</label>
                    <input type="text" name="city" value={formData.city}
                           onChange={handleInputChange} placeholder="Enter your city" required />
                </div>
                <button className={styles.btn} type="submit">Зарегистрировать</button>
            </form>
        </div>
    )
}