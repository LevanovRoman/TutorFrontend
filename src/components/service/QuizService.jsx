import axios from "axios";

export default class QuizService {

    static QUIZ_URL = "http://localhost:8080/api/user/quiz";

    static async getAllCategories(accessToken) {
        const  response = await axios.get(`${this.QUIZ_URL}/categories`,
            { headers: { Authorization: `Bearer ${accessToken}` }})
        return response.data;
    }

    static async createQuiz(accessToken,
                            selectedTitle, selectedQuantity, selectedCategory) {
        const  response = await axios.post(`${this.QUIZ_URL}/create`,
            {"title" : selectedTitle, "quantity": selectedQuantity, "categoryId": selectedCategory},
            { headers: { Authorization: `Bearer ${accessToken}` }})
        return response.data;
    }
}