import {Routes,Route} from 'react-router-dom'
import Home from '../app/Home'
import Pokedex from '../app/Pokedex'
import Details from '../app/Details'

function AppRouter () {
    return ( 
        <Routes> 
            <Route path="/" element={<Home />} />
            <Route path='/pokedex'>
                <Route index element ={<Pokedex />}/>
                <Route path=':id' element={<Details />}/>
            </Route>
        </Routes>
    )
}
 
export  { AppRouter } 