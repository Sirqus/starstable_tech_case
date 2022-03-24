import React, { useEffect, useState } from 'react';
import './App.css';
import Filter from './Filter';
import NewToDoButton from './NewToDoButton';
import ToDoList from './ToDoList';

const initialData = Object.freeze([{
  text: "",
  done: false,
  id: 0
}]);

function App() {
  const [data, setData] = useState({
    original: initialData,
    filtered: initialData
  });

  const filterCallback = (filterData: any) => {
    let filteredData = data.original;

    filteredData = data.original.filter((point) => {
      if (!filterData.done && !filterData.notDone)
        return point.text.toLowerCase().includes(filterData.filterText.toLowerCase());
      if (filterData.done && filterData.notDone)
        return point.text.toLowerCase().includes(filterData.filterText.toLowerCase());       
      return point.text.toLowerCase().includes(filterData.filterText.toLowerCase()) && filterData.done === point.done && filterData.notDone !== point.done;
    });

    setData({
      original: data.original,
      filtered: filteredData
    });
  }

  const reFetchData = () => {
    fetch("http://localhost:8000/todos")
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        setData({
          original: data,
          filtered: data,
        });
      })
  }

  useEffect(() => {
    reFetchData();
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Sven's ToDo-list</h1>
        <div>
          <NewToDoButton updateData={reFetchData} />
        </div>
      </header>
      <main>
        <Filter filterForm={filterCallback} />
        {data && (
          <ToDoList data={data.filtered} updateData={reFetchData} />
        )}
      </main>
    </div>
  );
}

export default App;
