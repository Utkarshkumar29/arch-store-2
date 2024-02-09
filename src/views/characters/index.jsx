import axios from "axios";
import React, { useEffect, useState } from "react";
import { Btn, CharacterCard, CharacterCardContainer, CharacterCardWrapper, CharacterContainer, CharacterWrapper, PaginationButtons, SearchInput, SearchLabel, SearchWrapper, TitleImage, TitleWrapper } from "../../styles/characters";
import Image from "../../assets/Title.png"

const Characters=()=>{
    const [characters,setCharacters]=useState('')
    const [page,setPage]=useState(1)
    const [name,setName]=useState('')
    const [status,setStatus]=useState('')
    const [gender,setGender]=useState('')
    const [species,setSpecies]=useState('')

    const fetchEpisodes=async()=>{
        try {
            const response=await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}&gender=${gender}&species=${species}`)
            const data=response.data
            setCharacters(data.results)
            console.log(data.results[0])
        } catch (error) {
            console.log("Error getting the episodes",error)
        }
    }

    const handleReset=()=>{
        setGender('')
        setName('')
        setSpecies('')
        setStatus('')
    }

    useEffect(()=>{
        fetchEpisodes()
        console.log(gender,status)
    },[page, name, status, species, gender])

    return(
        <CharacterContainer>
            <CharacterWrapper>
                <TitleWrapper>
                    <TitleImage src={Image} alt="Error"/>
                </TitleWrapper>
                <SearchWrapper>
                    <SearchInput type="text" placeholder="Search by Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>

                    <div>
                        <SearchLabel><input type="radio" value="Alive" checked={status === 'Alive'} onChange={(e)=>{setStatus(e.target.value)}}/>Alive</SearchLabel>
                        <SearchLabel><input type="radio" value="Dead" checked={status === 'Dead'} onChange={(e)=>{setStatus(e.target.value)}}/>Dead
                        </SearchLabel>
                        <SearchLabel><input type="radio" value="unknown" checked={status === 'unknown'} onChange={(e)=>{setStatus(e.target.value)}}/>Unknown
                        </SearchLabel>
                    </div>

                    <div>
                        <SearchLabel><input type="radio" value="Male" checked={gender === 'Male'} onChange={(e)=>{setGender(e.target.value)}}/>Male
                        </SearchLabel>
                        <SearchLabel><input type="radio" value="Female" checked={gender === 'Female'} onChange={(e)=>{setGender(e.target.value)}}/>Female
                        </SearchLabel>
                        <SearchLabel><input type="radio" value="Genderless" checked={gender === 'Genderless'} onChange={(e)=>{setGender(e.target.value)}}/>Genderless
                        </SearchLabel>
                        <SearchLabel><input type="radio" value="unknown" checked={gender === 'unknown'} onChange={(e)=>{setGender(e.target.value)}}/>Unknown
                        </SearchLabel>
                    </div>

                    <div>
                        <SearchLabel><input type="radio" value="Human" checked={species === 'Human'} onChange={(e)=>{setSpecies(e.target.value)}}/>Human
                        </SearchLabel>
                        <SearchLabel><input type="radio" value="Alien" checked={species === 'Alien'} onChange={(e)=>{setSpecies(e.target.value)}}/>Alien
                        </SearchLabel>
                    </div>
                    <Btn onClick={handleReset}>Reset</Btn>

                </SearchWrapper>
                <CharacterCardContainer>
                    <CharacterCardWrapper>
                        {characters && characters.map((character) => (
                            <CharacterCard key={character.id}>
                                <div>
                                    <h2>{character.name}</h2>
                                    <p>ID: {character.id}</p>
                                </div>
                                <p>Status: {character.status}</p>
                                <p>Species: {character.species}</p>
                                <p>Type: {character.type}</p>
                                <p>Gender: {character.gender}</p>
                                <p>Origin: {character.origin.name}</p>
                                <p>Last Known Location: {character.location.name}</p>
                                <p>Created: {character.created}</p>
                                <img src={character.image} alt={character.name} />
                            </CharacterCard>
                        ))}
                    </CharacterCardWrapper>
                </CharacterCardContainer>
                <PaginationButtons>
                    <button onClick={() => setPage(page - 1)} disabled={page === 1}>
                    Previous Page
                    </button>
                    <button onClick={() => setPage(page + 1)}>Next Page</button>
                </PaginationButtons>
            </CharacterWrapper>
        </CharacterContainer>
    )
}

export default Characters
