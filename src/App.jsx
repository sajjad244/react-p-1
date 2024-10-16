import './App.css'
import Counter from './Counter'
import Team from './Team'
import User from './User'


function App() {
{/* events-Handler */}
  function handleClick (){
    alert('button clicked')
  }
  const handleClick2 = () => {
      alert("button 2 clicked")
  }
  const addToFive = (num) =>{
    alert(num + 5);
  }
{/* events-Handler */}


  return (
    <>
      <h2>React core Concepts</h2>

      <User></User>

      <Team></Team>

      <Counter></Counter>

      {/* events-Handler */}
      <button onClick={handleClick}>Click 1</button>
      <button onClick={handleClick2}>Click 2</button>
      <button
      onClick={()=>{alert("third click")}}>Click 3
      </button>
      <button onClick={()=>addToFive(3)}>Click 4</button>
      {/* events-Handler */}
    </>
  )
}

export default App
