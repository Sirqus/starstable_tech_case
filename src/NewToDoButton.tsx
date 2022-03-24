import { useState } from "react";
import NewToDo from "./NewToDo";

const NewToDoButton = ({updateData}: any) => {
  const [showAdd, setShowAdd] = useState(false);
  const [buttonText, setButtonText] = useState("NEW");

  const handleNewClick = () => {
    const bShow = showAdd ? false : true;
    setShowAdd(bShow);
    setButtonText(bShow ? "X" : "NEW");
  };

  return (
    <div className="new-todo-button">
      <button onClick={handleNewClick}>{buttonText}</button>

      {showAdd && (
          <NewToDo updateData={updateData} addSuccess={handleNewClick}/>
      )}

    </div>
  );
};

export default NewToDoButton;
