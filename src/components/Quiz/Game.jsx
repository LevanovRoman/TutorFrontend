import styles from "./game.module.css";
// const questions = [
//     {
//         title: 'React - это ... ?',
//         variants: ['библиотека', 'фреймворк', 'приложение'],
//         correct: 0,
//     },
//     {
//         title: 'Компонент - это ... ',
//         variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
//         correct: 1,
//     },
//     {
//         title: 'Что такое JSX?',
//         variants: [
//             'Это простой HTML',
//             'Это функция',
//             'Это тот же HTML, но с возможностью выполнять JS-код',
//         ],
//         correct: 2,
//     },
// ];
export default function Game({step, question, onClickVariant, questionsLength}) {
    const percentage = Math.round(step / questionsLength * 100);

    return (
        // <>
        //     <div className="progress">
        //         <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
        //     </div>
        //     <h1>{question.title}</h1>
        //     <ul>
        //         {question.variants.map((text, index) => (
        //             <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
        //         ))}
        //     </ul>
        // </>

        <div className={styles.containerGame}>
            <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: `${percentage}%` }}></div>
            </div>
            <h2>{question.title}</h2>
            <ul className={styles.answers}>
               {question.variants.map((text) => (
                       <li onClick={() => onClickVariant(text)} key={text}>{text}</li>))}
            </ul>
            <div className={styles.buttons}>
                <button>Предыдущий</button>
                <button>Следующий</button>
            </div>
        </div>
    );
}