import axios from "axios";

export default class TaskService{

    static TASK_URL = "http://localhost:8080/api/admin-user/task";

    static async addTaskToStudent(accessToken, studentId, task) {
        console.log("SERV", task)
        const response = await axios.post(`${this.TASK_URL}/add-task/${studentId}`, {"title":task},
            {
                headers: {Authorization: `Bearer ${accessToken}`}
            })
        console.log(response)
        console.log(response.status)
        return response.status;
    }

    static async getTaskListForStudent(accessToken, studentId) {
        const response = await axios.get(`${this.TASK_URL}/task-list/${studentId}`,
            {
                headers: {Authorization: `Bearer ${accessToken}`}
            })
        console.log(response)
        console.log(response.data)
        return response.data;
    }

}