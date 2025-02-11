import './App.css';
import { useState } from 'react';

function App() {
  let [todolist, setTodolist] = useState([]);

  let saveToDOList = (event) => {
    event.preventDefault(); // Move this to the top to prevent default first
    let toname = event.target.toname.value;
    
    if (!todolist.includes(toname)) {
      setTodolist([...todolist, toname]);
    } else {
      alert("ToDO Name already Exists...");
    }
  };

  // ✅ Define delete function here
  let deleteRow = (index) => {
    setTodolist(todolist.filter((_, i) => i !== index));
  };

  let list = todolist.map((value, index) => (
    <ToDOListItems 
      value={value} 
      key={index} 
      indexNumber={index}
      deleteRow={deleteRow} // ✅ Pass deleteRow instead of todolist
    />
  ));

  return (
    <div className="App">
      <h1>ToDO List</h1>
      <form onSubmit={saveToDOList}>
        <input type='text' name='toname' /> <button>Save</button>
      </form>

      <div className='outerDiv'>
        <ul>{list}</ul>
      </div>
    </div>
  );
}

export default App;


function ToDOListItems({ value, indexNumber, deleteRow }) {
  return (
    <li>
      {value} <span onClick={() => deleteRow(indexNumber)}>&times;</span>
    </li>
  );
}
