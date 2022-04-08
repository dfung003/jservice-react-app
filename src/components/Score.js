export default function Score({ content }) {
    return (
        <div
            className="score"
            style={content >= 0 ? { color: "yellow" } : { color: "orangered" }}
        >
            {content}
        </div>
    )
};