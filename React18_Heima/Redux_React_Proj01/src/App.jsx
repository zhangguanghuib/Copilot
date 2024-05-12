
import { useDispatch, useSelector } from "react-redux"

import { increment, decrement } from './store/modules/counterStore'

function App() {
  const {count} = useSelector(state=>state.counter)

  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={()=>dispatch(increment())}>+</button>
        {count}
        <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  )
}

export default App
