import {useState} from "react";
import Game from "./Game.jsx";
import Result from "./Result.jsx";

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

export default function QuizStart({questions}) {
    const [step, setStep] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [answerList, setAnswerList] = useState([
    //     {
    //     "answerStudent": '',
    //     "rightOrNot": false
    // }
    ]);
    const question = questions[step];
    const questionsLength = questions.length;

    const onClickVariant = (text) => {
        console.log(step, text);
        console.log("ANSWER:  ", questions[step].answer);
        setStep(step + 1);

        if (text === questions[step].answer){
            setCorrect(correct + 1);
            setAnswerList([... answerList, text]);
            console.log("answerList1  ",answerList);
        }else {
            setAnswerList([... answerList, text]);
            console.log("answerList2  ",answerList);
        }
    }

    return (
        <div className="App">
            {
                step !== questionsLength ? <Game
                                                step={step}
                                                question={question}
                                                onClickVariant={onClickVariant}
                                                questionsLength={questionsLength}
                                            /> : <Result correct={correct} questionsLength={questionsLength}/>

            }

        </div>
    );
}
