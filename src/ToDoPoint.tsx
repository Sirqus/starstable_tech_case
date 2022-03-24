import React, { useEffect, useState } from "react";

const ToDoPoint = (props: any) => {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const [del, setDel] = useState(false);

  const handleClick = (e: any) => {
    if (e.target.className === "deleteBtn") {
      setDel(true);
    }
    else if (e.target.className === "deleteYes") {
      console.log("DELETE ME!");
      fetch("http://localhost:8000/todos/" + props.data.id, {
        method: "DELETE"
      }).then(() => {
        props.updateData();
      })
    }
    else if (e.target.className === "deleteNo") {
      setDel(false);
    }
    console.log(e);

  };

  const handleChange = (e: any) => {
    if (e.target.className === "checkboxBtn") {
      const newData = props.data;
      newData.done = !done;
      setDone(!done);
      
      fetch("http://localhost:8000/todos/" + newData.id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newData)
      }).then(() => {
        props.updateData();
      })
    }
  }

  useEffect(() => {
    setText(props.data.text);
    setDone(props.data.done);
  }, []);

  return (
    <div>
      {!del &&
        (
          <div className="todo-point-content" key={props.data.id}>
            <input className="checkboxBtn" type="checkbox" checked={done} onChange={handleChange} />
            <p>{text}</p>
            <button className="deleteBtn" onClick={handleClick}>Delete?</button>
          </div>
        )}
      {del && (
        <div className="todo-point-content" key={props.data.id}>
          <button className="deleteYes" onClick={handleClick}>Yes</button>
          <p>Delete?</p>
          <button className="deleteNo" onClick={handleClick}>No</button>
        </div>
      )}
    </div>
  );
};

export default ToDoPoint;