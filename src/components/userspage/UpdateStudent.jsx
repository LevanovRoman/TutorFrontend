import {data, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import StudentService from "../service/StudentService.jsx";

export default function UpdateStudent() {
    const navigate = useNavigate();
    const { studentId } = useParams();

    const [studentData, setStudentData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        role:"",
        city:""
    });

    useEffect(() => {
        fetchStudentDataById(studentId);
    }, [studentId]);

    const fetchStudentDataById = async (studentId) => {
        try{
            const accessToken = localStorage.getItem("accessToken");
            const response = await StudentService.getStudentById(studentId, accessToken);
            setStudentData(response);
        }catch (error) {
            console.log('Error fetching user data:', error);
        }
    }

    const handleInputChange = (e) =>{
        const { name, value } = e.target;
        setStudentData((prevStudentData) => ({...prevStudentData, [name]: value}));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            const confirmUpdate = window.confirm("Are you sure you want to update?");
            if (confirmUpdate) {
                const accessToken = localStorage.getItem("accessToken");
                const result = await StudentService.updateStudent(studentId, studentData, accessToken);
                console.log(result);
                navigate("/admin/student-management");
            }
        }
        catch (error) {
            console.error('Error updating user profile:', error);
            alert(error);
        }
    }


    return (
        <div className="auth-container">
            <h2>Update User</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={studentData.firstName}
                    onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={studentData.lastName}
                           onChange={handleInputChange}/>
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={studentData.email} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>Role:</label>
                    <input type="text" name="role" value={studentData.role} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                    <label>City:</label>
                    <input type="text" name="city" value={studentData.city} onChange={handleInputChange} />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>

    )
}