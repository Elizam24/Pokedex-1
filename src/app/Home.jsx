import { useRef } from "react"
function Home () {
  const inputRef = useRef()
    return(
 <div className='Home'>   
  <h1>POKEDEX</h1>
  <h2>Hola Entrenador</h2>
  <p>Ingresa tu nombre</p>
  <div>
    <input 
    ref = {inputRef}
    type='text' placeholder='Nombre' />
    <button>Comenzar</button>
  </div>
  </div>
 )
}
export default Home
