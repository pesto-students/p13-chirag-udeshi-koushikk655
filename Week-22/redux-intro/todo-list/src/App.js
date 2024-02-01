import "./App.css";
import { addTask, deleteTask, markAsCompleted } from "./Reducers/todosSlice";
import { store } from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const data = useSelector((state) => state.todos);

  return (
    <div className="App">
      <div style={{display:'flex', justifyContent:"center",margin:'50px', gap:'10px'}}>
        <input type="text" onChange={(e) => setText(e.target.value)} value={text} size={50} style={{height:'50px'}} />{" "}
        <button style={{height:'55px', background: '#7EC8E3', borderRadius:'5px', fontWeight:"bold"}}
          onClick={() => {
            dispatch(addTask(text));
            setText("");
          }}
        >
          Add Task
        </button>
      </div>
      <h2>To do list - </h2>
      <div style={{display:"flex",flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'20px'}}>
        {data.map((d, i) => (
          <div style={{display:"inline-flex", gap:"20px"}}>
            <div style={{fontSize:'25px'}}>{d.text}</div>{d.completed ? <span style={{color: "greenyellow", background:'green', fontSize:'25px'}}>Completed</span> : null}
            {!d.completed ? <button onClick={() =>dispatch(markAsCompleted(i))} style={{fontWeight:"bold", background:"#7EC8E3"}}>Mark As Completed</button>: null}
            <button onClick={() => dispatch(deleteTask(i))} style={{fontWeight:"bold", height:'30px', background:"#7EC8E3"}}> 
              Delete Task
            </button>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
