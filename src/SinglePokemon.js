import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

function SinglePokemon(){
    const [pokemonDetails, setPokemonDetails] = useState(null);
    const { id } = useParams();


useEffect (() => {
    const fetchSingleDetails = async () => {
      try{
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        setPokemonDetails(data);
      }catch(err){
        console.log('error fetching single pokemon data', err);
        console.log(err);


      }
    }


    fetchSingleDetails();
},[id]);



return(
    <div>
        <h2>Pokemon Details</h2>
        {pokemonDetails ? (
            <div>
           <h3>{pokemonDetails.name}</h3>
           <img
             src={pokemonDetails.sprites.front_default}
             alt={pokemonDetails.name}
          />
          <p>Height: {pokemonDetails.height}</p>
          <p>Weight: {pokemonDetails.weight}</p>
          <p>Base Experience: {pokemonDetails.base_experience}</p> 
          <p>
            Abilitiies{' '}
            {pokemonDetails.abilities
            .map((ability) => ability.ability.name).join(',')}</p>
        </div>
    ) : ( 
    <p>Loading Pokemon Details...</p>
)}
    
    </div>
)

return <> Testing single Pokemon </>;


}





export default SinglePokemon