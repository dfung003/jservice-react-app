export default function Reveal(props) {
    return (
        <>
            <button onClick={props.toggleReveal} className="revealBtn">Click to Reveal Question</button>
            {Object.keys(props.answer).length ? (
                props.showBtn ? (
                    <h1>Question: {props.answer[0].answer}</h1>
                ) :
                    (
                        ""
                    )

            ) :
                (
                    ""
                )
            }
        </>
    )
}