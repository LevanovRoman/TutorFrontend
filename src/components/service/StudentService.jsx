import axios from "axios";

class StudentService{

    static BASE_URL_AUTH = "http://localhost:8080/api/auth";
    static BASE_URL = "http://localhost:8080/api";
    static BASE_URL_ADMIN = "http://localhost:8080/api/admin";

    static async getAllStudents(accessToken) {
        try{
            const response = await axios.get(`${this.BASE_URL_ADMIN}/get-all`,
                {
                    headers: {Authorization: `Bearer ${accessToken}`}
                });
            return response.data;
        }catch (e) {
            console.log(e);
            return [];
        }
    }

    static async register(studentData, accessToken) {
        try {
            const response = await axios.post(`${this.BASE_URL_AUTH}/register`, studentData,
                {
                    headers: {Authorization: `Bearer ${accessToken}`}
                });
            return response.status;
        } catch (err) {
            throw err;
        }
    }

    static async login(email, password) {
        try{
            const response = await axios.post(`${this.BASE_URL_AUTH}/login`, {email, password});
            return response.data;
        }catch (e) {
            return 404;
        }

    }

    static async getYourProfile(accessToken) {
        try{
            const response = await axios.get(`${this.BASE_URL}/admin-user/get-profile`,
                {
                    headers: {Authorization: `Bearer ${accessToken}`},
                });
            return response.data;
        }catch (error) {
            throw error;
        }
    }

    static async getStudentById(studentId, accessToken) {
        try{
            const response = await axios.get(`${this.BASE_URL}/admin/get-student/${studentId}`,
                {
                    headers: {Authorization: `Bearer ${accessToken}`},
                });
            return response.data;
        }catch (error) {
            throw error;
        }

    }

    static async updateStudent(studentId, studentData, accessToken) {
        try{
            const response = await axios.put(`${this.BASE_URL}/admin/update/${studentId}`, studentData,
                {
                    headers: {Authorization: `Bearer ${accessToken}`},
                })
            return response.status;
        }catch (error) {
            throw error;
        }
    }

    static async deleteStudent(studentId, accessToken) {
        try{
            const response = await axios.delete(`${this.BASE_URL_ADMIN}/delete/${studentId}`,
                {
                    headers: {Authorization: `Bearer ${accessToken}`},
                })
            return response.status;
        }catch (error) {
            throw error;
        }

    }

    /**AUTHENTICATION CHECKER */
    static logout(){
        localStorage.removeItem('accessToken')
        localStorage.removeItem('role')
    }

    static isAuthenticated(){
        const token = localStorage.getItem('accessToken')
        return !!token
    }

    static isAdmin(){
        const role = localStorage.getItem('role')
        return role === 'ADMIN'
    }

    static isUser(){
        const role = localStorage.getItem('role')
        return role === 'USER'
    }

    static adminOnly(){
        return this.isAuthenticated() && this.isAdmin();
    }



}

export default StudentService;