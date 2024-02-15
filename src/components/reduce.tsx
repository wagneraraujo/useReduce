

type State = {
  count: number;
}
type Action = | { type: 'increment' } | { type: 'decrement' };
const initializedState = { count: 0 }


  function reducer(state: State, action: Action) {
    switch (action.type) {
      case 'increment':
        return { count: state.count + 1}

      case 'decrement':
      if(state.count === 0){
        return {count: state.count}
      }
        return { count: state.count - 1}
    }
  }


function Reduce() {

  const [state, dispatch] = useReducer(reducer, initializedState);


  return (
    <>
      <h1>UseReduce</h1>
      <div className="card">
        <button onClick={() => dispatch({type:"decrement"})}>
          -
        </button>

        <button onClick={() => dispatch({type:"increment"})}>
          +
        </button>
        <p>
          State: {state.count}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Reduce
