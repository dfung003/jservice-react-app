import "./style.css";
import Header from "./components/Header";
import Score from "./components/Score";
import ScoreBtn from "./components/ScoreBtn";
import { useState, useEffect } from 'react';


export default function App() {
    // set state variable
    const [score, setScore] = useState(0);
    const [answer, setAnswer] = useState([]);
    const [qBtn, setQBtn] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    const url = "http://jservice.io/api/random"

    const increase = (e) => {
        setScore(score + answer[0].value);
    };
    const decrease = (e) => {
        setScore(score - answer[0].value);
    };
    const reset = (e) => {
        setScore(0);
    };

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(url)
                const data = await response.json()
                setAnswer(data)
            } catch (err) {
                console.log(err)
            }
        })()

    }, [qBtn])

    const toggleAns = () => {
        if (qBtn) {
            setQBtn(false)
        } else {
            setQBtn(true)
        }
    }

    const toggleReveal = () => {
        if (showBtn) {
            setShowBtn(false)
        } else {
            setShowBtn(true)
        }
    }
    return (
        <div className="App">
            <Header />
            <div className="score-container">
                <div className="score-label">
                    <h3>Score: <Score content={score} /></h3>
                </div>
            </div>
            <div className="button-container">
                <ScoreBtn
                    content={"Decrease"}
                    handleClick={decrease}
                    classNames={["decrease"]}
                />
                <ScoreBtn
                    content={"Increase"}
                    handleClick={increase}
                    classNames={["increase"]}
                />
                <ScoreBtn
                    content={"Reset"}
                    handleClick={reset}
                    classNames={["reset"]}
                />
            </div>
            <div className="answer-container">
                <p>Let's Play</p>

                <button onClick={toggleAns} className="answerBtn">Get Random Answer</button>
                {Object.keys(answer).length ? (
                    <div className="info-container">
                        <h2 className="description">Category: {answer[0].category.title}</h2>
                        <h2 className="description">Points: {answer[0].value}</h2>
                        <h2 className="description">Answer: {answer[0].question} </h2>
                    </div>
                ) :
                    (
                        ""
                    )
                }
            </div>
            <div className="question-container">
                <button onClick={toggleReveal} className="revealBtn">Click to Reveal Question</button>
                {Object.keys(answer).length ? (
                    showBtn ? (
                        <h1>Question: {answer[0].answer}</h1>
                    ) :
                        (
                            ""
                        )

                ) :
                    (
                        ""
                    )
                }
            </div>
        </div>
    )

}