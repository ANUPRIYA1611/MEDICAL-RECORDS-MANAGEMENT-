import react from 'react';
import {useSelector,useDispatch} from 'react-redux';
function Redux(){
    const counter=useSelector((state)=>state.counter);
  const dispatch=useDispatch();
  const increment=()=>{
        dispatch({type: "INC"})
  }
  const decrement=()=>{
        dispatch({type:"DEC"})
  }
  const add=()=>{

  }
    return(
        <div>
<h1>Counter App</h1>
      <h2>{counter}</h2>
       <button onclick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
        </div>
    );
}
export default Redux;