import axios from "axios";
import React, { useEffect, useState } from "react";
import { CharacterCardContainer, CharacterCardWrapper, CharacterContainer, CharacterWrapper, PaginationButtons, SearchInput, SearchWrapper, Spinner, TitleImage, TitleWrapper } from "../../styles/characters";
import Image from "../../assets/Title.png"
import Character from "../../components/character";
import { EpisodeCard, EpisodeCharacters } from "../../styles/episodes";
import spinner from "../../assets/Spinner.png"

const Episodes=()=>{
    const [episodes,setEpisodes]=useState('')
    const [page,setPage]=useState(1)
    const [name,setName]=useState('')
    const [loading,setLoading]=useState(true)

    const fetchEpisodes=async()=>{
        try {
            const response=await axios.get(`https://rickandmortyapi.com/api/episode/?page=${page}&name=${name}`)
            const data=response.data
            setEpisodes(data.results)
            setLoading(false)
            console.log(data.results[0])
        } catch (error) {
            console.log("Error getting the episodes",error)
        }
    }

    useEffect(()=>{
        fetchEpisodes()
    },[page,name])

    if(loading){
        return(
            <CharacterContainer>
                <CharacterWrapper>
                    <Spinner src={spinner} alt="Error"/>
                </CharacterWrapper>
            </CharacterContainer>
        )
    }

    return(
        <CharacterContainer>
            <CharacterWrapper>
                <TitleWrapper>
                    <TitleImage src={Image} alt="Error"/>
                </TitleWrapper>

                <SearchWrapper>
                    <SearchInput type="text" placeholder="Search by Name" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </SearchWrapper>
                
                <CharacterCardContainer>
                    <CharacterCardWrapper>
                        {episodes && episodes.map((episode) => (
                            <EpisodeCard key={episode.id}>
                                <div>
                                    <h2>{episode.name}</h2>
                                    <p>ID: {episode.id}</p>
                                </div>
                                <p>Air Date: {episode.air_date}</p>
                                <p>Episode Number: {episode.episode}</p>              
                                <p>CreatedAt: {episode.created}</p>
                                <p>Characters</p>
                                <EpisodeCharacters>
                                {episode.characters && episode.characters.map((characterUrl,index)=>(
                                    <Character key={index} characterUrl={characterUrl}/>
                                ))}
                                </EpisodeCharacters>
                            </EpisodeCard>
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

export default Episodes
