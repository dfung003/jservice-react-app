import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { useState, useEffect } from 'react';

export default function Questions(props) {
    const [data, setData] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [score, setScore] = useState(0);
    const url = "http://jservice.io/api/random";
    const getQuestion = (data) => {
        setToggle(data)
    }

    const getScore = (data) => {
        setScore(data)
    }

    const getData = async () => {
        const response = await fetch(url);
        const apiData = await response.json();
        setData(apiData);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            {data.map((item, idx) => {
                return (
                    <>
                        <h2>Score: {score}</h2>
                        <div className="score">
                            <button>Decrease</button>
                            <button>Increase</button>
                            <button>Reset</button>
                        </div>
                        <h1>Let's Play</h1>
                        <button onClick={() => { getData() }}>Get Question</button>
                        <h2>{item.question}</h2>
                        <h2>Category: {item.category.title}</h2>
                        <h2>Points: {item.value}</h2>
                        <h2>Answer: {item.answer}</h2>
                        <button onClick={() => { getQuestion(!toggle) }}>Click to Reveal Question</button>
                        {toggle ? <p>{item.question}</p> : ""}



                    </>
                )
            })
            }
        </div>
    )
}