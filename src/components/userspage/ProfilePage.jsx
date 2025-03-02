import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import StudentService from "../service/StudentService.jsx";

export default function ProfilePage() {
    const [profileInfo, setProfileInfo] = useState({});

    useEffect(() => {
        fetchProfileInfo();
    }, []);

    const fetchProfileInfo = async () => {
        try{
            const accessToken = localStorage.getItem('accessToken');
            const response = await StudentService.getYourProfile(accessToken);
            console.log(response);
            setProfileInfo(response);
        }catch (error) {
            console.error('Error fetching profile information:', error);
        }
    }

    return (
        <div className="profile-page-container">
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
    )
}