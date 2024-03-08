
import './App.css'
import Counter from './counter'
import Users1 from './users1'
import Friends from './Friends'



function App() {

  function handleClick(){
    alert('Clicked the button')
  }

 const handleClick2 = () =>{
    alert("Clicked the button2")
  }

  const addToFive = (num) =>{
    alert (num+5);
  }
 

  return (
    <>

      <h3>React concept part -02</h3>
      <Friends></Friends>
      
      <Users1></Users1>
 



      <Counter></Counter>





      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Button 2</button>
      <button onClick={()=>{alert ('Third clicked')}}>Button 2</button>
      {/* wITH PARAMETER */}
      <button onClick={()=>addToFive(5)}>aDD TO fIVE</button>

    </>
  )
}

export default App
