import CardContainer from "../CardContainer";
import {words} from '../../data/words'

function App() {
  return (
    <div >
      <CardContainer words_array={words}/>
    </div>
  );
}

export default App;
