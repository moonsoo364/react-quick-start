import MyButton from "./example/state_in_my_app";
import {useState} from 'react';

function MyApp(){
  const [count,setCount] = useState(0);
    function handleClick(){
        setCount(count+1);
    }
  return(
    <div>
      <h1>Counters that update togetther</h1>
      <MyButton onClick={handleClick} count={count}/>
      <MyButton onClick={handleClick} count={count}/>
    </div>
  )
}

export default MyApp;
