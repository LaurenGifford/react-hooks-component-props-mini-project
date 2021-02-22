
function addEmojis(minutes){
    const interval = minutes < 30 ? 5 : 10
    const emoji = minutes < 30 ? "☕️" : "🍱"
    let emojis = ""
    for (let i = 0; i < minutes; i += interval) {
        emojis += emoji
    }
    return emojis
}

function Article({title, preview, minutes, date="January 1, 1970"}) {
    let minToRead = `${addEmojis(minutes)} ${minutes} min read`
    return (
        <article key={title}>
            <h3>{title}</h3>
            <small>
                {date} • {minToRead}
            </small>
            <p>{preview}</p>
        </article>
    )
}

export default Article