import React, {useState, useEffect} from 'react';
import ChiikawaCharacter from './ChiikawaCharacters';

function CharacterList(){
    const [index, setIndex] = useState(1);
    const [character, setCharacter] = useState(ChiikawaCharacter[index]);

    const totalLength = Object.keys(ChiikawaCharacter).length;
    
    
    function handleNext(){
        setIndex((prev)=>prev+1>totalLength?1:prev+1);
    }
    function handlePrev(){
        setIndex((prev)=>prev-1>0?prev-1:totalLength);
    }

    useEffect(()=>{
        setCharacter(ChiikawaCharacter[index]);
    },[index]);

    return (
        <div>
            <h1 id="Ctitle">!! Chiikawa characters !!</h1>
            
            <h2 id="Cname">{character.name}</h2>
 
            <img id="Cimage" src={character.src}></img>

            <p id="Cdesc">{character.desc}</p>
            <button id="Cprev" onClick ={handlePrev}>Previous</button>
            <button id="Cnext" onClick={handleNext}>Next</button>
            <p>Current index: {index}</p>


        </div>
    );

}

export default CharacterList;



