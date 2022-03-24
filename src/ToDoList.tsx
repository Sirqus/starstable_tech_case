import ToDoPoint from "./ToDoPoint";

const ToDoList = ({data, updateData}: any) => {


  return (
    <div className="todo-list">
      {data && Array.from(data).reverse().map((point: any) => (
        <div className="todo-point" key={point.id}>
          {point && (
            <ToDoPoint data={point} updateData={updateData} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ToDoList;