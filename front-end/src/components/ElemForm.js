import React, { useState } from "react";

const ElemForm = ({ AddTodo }) => {
    const [text, setText] = useState("")


    const handleSubmit = e => {
        e.preventDefault();
        if (!text) return
        AddTodo(text)
        setText("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                placeholder="Enter text here..."
                onChange={e => setText(e.target.value)} >
            </input>
        </form>
    )
}

export default ElemForm
