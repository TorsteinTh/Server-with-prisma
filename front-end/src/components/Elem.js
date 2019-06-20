import React from 'react'

const Elem = ({ todo, index, handleDelete }) => {
    return (
        <div>
            {todo.text}
            <button onClick={() => handleDelete(index)}>X</button>
        </div>
    )
}

export default Elem