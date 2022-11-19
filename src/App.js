import Counter from './Counter';
import GetDog from './Getdog';
import BottomMenu from './BottomMenu';
import './App.css';
import { useState } from "react"

function App() {
  const [likes, setLikes] = useState(0)
  const [dislikes, setDislikes] = useState(0)
  const [imageClicked,setImageClicked]=useState(true)

  function handleRestart(){
setLikes(0)
setDislikes(0)
setImageClicked(true)
  }
  return (
    <div className="App">

<Counter likes={likes} dislikes={dislikes}/>
{likes===10?
<div><h3>you should get a dog!</h3>
<button onClick={handleRestart}> restart </button> </div>
:""}
{dislikes===10?
<div><h3>you shouldn't get a dog!</h3>
<button onClick={handleRestart}> restart </button> </div>
:""}
<GetDog imageClicked={imageClicked} setImageClicked={setImageClicked} likes={likes} dislikes={dislikes}/>
<BottomMenu setLikes={setLikes} setDislikes={setDislikes} setImageClicked={setImageClicked} likes={likes} dislikes={dislikes}/>
    </div>
  );
}

export default App;
