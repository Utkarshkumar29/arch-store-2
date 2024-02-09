import React, { useState, useEffect } from "react";
import axios from "axios";
import { CharacterImageWrapper, Image } from "../../styles/character";
import { CharacterContainer, Spinner } from "../../styles/characters";
import spinner from "../../assets/Spinner.png"

const Character=({characterUrl})=>{
  const [character,setCharacter]=useState(null)
  const [loading,setLoading]=useState(true)

  useEffect(()=>{
    const fetchCharacter=async()=>{
      try {
        const response=await axios.get(characterUrl)
        setCharacter(response.data)
        setLoading(false)
      } catch (error) {
        console.log(`Error getting character data for ${characterUrl}`,error)
      }
    }

    fetchCharacter()
  }, [characterUrl])

  if(loading){
    return(
      <Spinner src={spinner} alt="Error"/>
    )
}

  return (
    <>
      {character && (
        <CharacterImageWrapper>
          <Image src={character.image} alt={character.name}/>
        </CharacterImageWrapper>
      )}
    </>
  )
}

export default Character  
