import { useReducer, useState } from 'react'
import './App.css'


type Task = {
  id: number;
  text: string;
}

type Action = | { type: "add", text: string };


const initialState: Task[] = []

function reducer(state: Task[], action: Action) {

  switch (action.type) {
    case 'add':
      console.log('add', action.text)
      return [
        ...state,
        {
          id: Date.now(), text: action.text
        }
      ]


    default:
      break;
  }
}

function App() {

  const [input, setInput] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  function addTask() {
    dispatch({type: "add", text: input})
  }



  return (
    <>
      <h1>UseReduce</h1>
      <div className="card">

        <p></p>
      
        <div>
          <input type="text" value={input} onChange={(event) => setInput(event.target.value)} />
          <button onClick={addTask}>Add tarefa</button>
        </div>

        <hr />
        {
          state.map((task: Task) => (
          <li key={task.id}>
             {task.id} 
              <span>
                {task.text}
              </span>

            </li>
          ))
                  }


      </div>
    </>
  )
}

export default App
