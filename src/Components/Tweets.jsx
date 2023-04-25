import { useState } from "react"


export function Tweet({name, content, like, onDelete}) {

    let [likes,setLike] = useState(like);

    function addLike() {
        setLike((curr) => curr + 1)
    }

    return (
        <div className="tweet">
            <h3 className="username">{name}</h3>
            <p className="content">{content}</p>
            <button className="like" onClick={() => addLike()}>{likes}🧡</button>
            <button className="delete" onClick={() => onDelete()}>❌</button>
        </div>
    )
}