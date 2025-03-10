// import styles from "./result.module.css";


import {useNavigate} from "react-router-dom";

export default function Result({ correct, questionsLength }) {
    const navigate = useNavigate();
    return (
        <div className="result">
            {/*<img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />*/}
            <h2>Вы отгадали {correct} ответа из {questionsLength}</h2>

                <button onClick={() => navigate("/quiz-first")}>Попробовать снова</button>


        </div>
    );
}