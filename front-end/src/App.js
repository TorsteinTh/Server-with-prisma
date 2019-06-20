import React, { useState } from 'react';
import './App.css';
import ElemForm from './components/ElemForm';
import Elem from './components/Elem';

function App() {
  const [list, setList] = useState([{ text: "Walk out" }, { text: "Get a life" }])

  const handleDelete = index => {
    const Newlist = [...list]
    Newlist.splice(index, 1);
    setList(Newlist);
  }

  const addTodo = text => {
    const NewTodo = [...list, { text: text }]
    setList(NewTodo)
  }

  return (
    <div>
      <h1>TODO:</h1>
      {list.map((todo, index) => (
        < Elem
          key={index}
          index={index}
          handleDelete={handleDelete}
          todo={todo}
        />
      ))}
      <ElemForm AddTodo={addTodo}></ElemForm>
    </div>
  );
}

export default App;
