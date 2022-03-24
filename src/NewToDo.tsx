import React, { useState } from "react";

const NewToDo = (props: any) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e);
    const point = {text, "done": false};

    fetch("http://localhost:8000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(point)
    }).then(() => {
      props.updateData();
      props.addSuccess();
    })
  }

  return (
    <div className="new-todo-content">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">What to do:
        <input type="text" onChange={(e) => setText(e.target.value)} required/>
        </label>
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default NewToDo;