import { useParams } from 'react-router-dom';
import { FiCornerUpLeft } from "react-icons/fi";

function Details () {
    const params = useParams();
    
    return (
        <div>
            <link to ="/pokedex"> {'←'} Volver </link>
            <FiCornerUpLeft />
            <h2> Detalles del Pokemon: {params.name}</h2>
    </div>
    )
}

export default Details
