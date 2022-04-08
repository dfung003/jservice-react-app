export default function InfoDisplay(props) {
    return (
        <>
            {Object.keys(props.answer).length ? (
                <div className="info-container">
                    <h2 className="description">Category: {props.answer[0].category.title}</h2>
                    <h2 className="description">Points: {props.answer[0].value}</h2>
                    <h2 className="description">Answer: {props.answer[0].question} </h2>
                </div>
            ) :
                (
                    ""
                )
            }
        </>
    )
}