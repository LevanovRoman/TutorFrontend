import axios from "axios";

export default class TaskService{

    static TASK_URL = "http://localhost:8080/api/admin-user/task";

    static async addTaskToStudent(accessToken, studentId, task) {
        console.log("SERV", task)
        const response = await axios.post(`${this.TASK_URL}/add/${studentId}`, {"title":task},
            {
                headers: {Authorization: `Bearer ${accessToken}`}
            })
        console.log(response)
        console.log(response.status)
        return response.status;
    }

    static async getTaskListForStudent(accessToken, studentId) {
        const response = await axios.get(`${this.TASK_URL}/list/${studentId}`,
            {
                headers: {Authorization: `Bearer ${accessToken}`}
            })
        console.log(response)
        console.log(response.data)
        return response.data;
    }

    static async deleteTask(accessToken, taskId) {
        const response = await axios.delete(`${this.TASK_URL}/delete/${taskId}`,
            {
                headers: {Authorization: `Bearer ${accessToken}`}
            })
        console.log("DELETE RESP ", response)
        console.log("DELETE RESP ", response.data)
        return response.status;
    }

    static async changeCompletedTask(accessToken, taskId) {
        const response = await axios.get(`${this.TASK_URL}/change-status/${taskId}`,
            {
                headers: {Authorization: `Bearer ${accessToken}`}
            })
        console.log("CHANGE RESP ", response)
        return response.status;
    }
}