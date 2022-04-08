export default function GetBtn(props) {
    return (
        <>
            <button onClick={props.toggleAns} className="answerBtn">Get Random Answer</button>
        </>
    )
}