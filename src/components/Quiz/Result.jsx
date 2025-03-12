import styles from "./result.module.css";

export default function Result({ correct, questionsLength, answerList }) {
    return (
        <div className={styles.containerResult}>
            <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"  alt="done"/>
            {/*<img src={"img/done.jpg"}  alt={"done"}/>*/}
            <h2>Вы отгадали {correct} ответа из {questionsLength}</h2>
            {/*{answerList.map((answer, index) =>(*/}
            {/*   <p key={index}>{answer}</p>*/}
            {/*))}*/}
                {/*<button onClick={() => navigate("/quiz-first")}>Попробовать снова</button>*/}
<button onClick={() => window.location.reload()}>Попробовать снова</button>

        </div>
    );
}