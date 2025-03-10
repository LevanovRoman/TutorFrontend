import { useState, useEffect } from "react";
import styles from "./quizfirst.module.css";
import QuizService from "../service/QuizService.jsx";
import QuizStart from "./QuizStart.jsx";

const QuizFirst = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedQuantity, setSelectedQuantity] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [questions, setQuestions] = useState([]);
    const [showQuizStart, setShowQuizStart] = useState(false);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const accessToken = localStorage.getItem('accessToken');
            const response = await QuizService.getAllCategories(accessToken);
            setCategories(response);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    if (loading) {
        return <p>Загрузка...</p>;
    }

    if (error) {
        return <p>Ошибка: {error}</p>;
    }

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            const accessToken = localStorage.getItem('accessToken');
            const response = await QuizService.createQuiz(accessToken,
                selectedTitle, selectedQuantity, selectedCategory);
            setQuestions(response.questions);
            console.log("QUIZ", response.questions);
            setShowQuizStart(true);
        }catch (error) {
            console.log(error);
            setError(error);
        }
    }

    return (
        <div className={styles.wrapperFirst}>
            {showQuizStart ? (
                <QuizStart questions={questions} /> // Рендерим QuizStart
            ) : (
            <div className={styles.containerFirst}>
                <h1>Старт</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label>Название</label>
                        <input type="text" value={selectedTitle}
                               onChange={(e) => setSelectedTitle(e.target.value)} required/>
                    </div>
                    <div className={styles.formGroup}>
                        <label>Количество вопросов</label>
                        <input type="text" value={selectedQuantity}
                               onChange={(e) => setSelectedQuantity(Number(e.target.value))} required/>
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="options">Тема</label>
                        <select className={styles.choice}  id="options" value={selectedCategory} onChange={handleChange}>
                            <option value="">-- Выбери --</option>
                            {categories.map((category) => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button type="submit" className={styles.btn}>Начать</button>
                </form>
            </div>
                )}
        </div>

    );
};

export default QuizFirst;