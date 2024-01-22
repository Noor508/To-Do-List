import React, { useState } from "react";
import "./index.css";
import ToDoList from "./Components/ToDoList";
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);
  const itemEvent = (e) => {
    setInputList(e.target.value);
  };

  const listofItems = () => {
    setItems((oldItem) => {
      return [...oldItem, inputList];
    });
    setInputList("");
  };
  function deleteItems(id) {
      setItems((oldItem)=>{
        return oldItem.filter((arrelem, index)=>{
          return index!==id;
        })
      })
  }
  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1>To Do list 📜</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Items"
            onChange={itemEvent}
            value={inputList}
          />
          <button onClick={listofItems}>+</button>

          <ol>
           

      {items.map((itemsVal, index) => {
  return (
    <ToDoList key={index} id={index} text={itemsVal} onSelect={() => deleteItems(index)}></ToDoList>
  );
})}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
