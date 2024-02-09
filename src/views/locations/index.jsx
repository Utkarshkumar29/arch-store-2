import React, { useEffect, useState } from "react";
import axios from "axios";
import { CharacterCardContainer, CharacterCardWrapper, CharacterContainer, CharacterWrapper, PaginationButtons, SearchWrapper, TitleImage, TitleWrapper } from "../../styles/characters";
import Image from "../../assets/Title.png";
import { EpisodeCard, EpisodeCharacters } from "../../styles/episodes";
import Character from "../../components/character";
import { LocationCard, LocationContainer } from "../../styles/locations";

const Locations = () => {
    const [locations, setLocations] = useState([])
    const [page, setPage] = useState(1)
    const [locationName, setLocationName] = useState('')
    const [showLocations, setshowLocations] = useState('')

    const fetchEpisodes = async () => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/location/?page=${page}&name=${locationName}`)
            const data = response.data
            setLocations(data.results)
        } catch (error) {
            console.log("Error getting the episodes", error)
        }
    };

    const fetchLocation = async () => {
        try {
            const response = await axios.get(`https://rickandmortyapi.com/api/location/?name=${locationName}`)
            const data = response.data
            setshowLocations(data.results)
        } catch (error) {
            console.log("Error getting the episodes", error)
        }
    };

    useEffect(() => {
        fetchLocation()
    }, []) 

    useEffect(() => {
        fetchEpisodes()
        console.log(locationName, page)
    }, [page, locationName])

    return (
        <LocationContainer>
            <CharacterWrapper>
                <TitleWrapper>
                    <TitleImage src={Image} alt="Error" />
                </TitleWrapper>
                <SearchWrapper>
                    <select onChange={(e) => setLocationName(e.target.value)} value={locationName}>
                        <option>Choose...</option>
                        {showLocations && showLocations.map((location, index) => (
                            <option key={index} value={location.name}>
                                {location.name}
                            </option>
                        ))}
                    </select>
                </SearchWrapper>
                {locationName ? (
                    <CharacterCardContainer>
                        <CharacterCardWrapper>
                            {locations && locations.map((location) => (
                                <LocationCard key={location.id}>
                                    <div>
                                        <h2>{location.name}</h2>
                                        <p>ID: {location.id}</p>
                                        <p>Characters</p>
                                        <EpisodeCharacters>
                                            {location.residents && location.residents.map((characterUrl, index) => (
                                                <Character key={index} characterUrl={characterUrl} />
                                            ))}
                                        </EpisodeCharacters>
                                    </div>
                                </LocationCard>
                            ))}
                        </CharacterCardWrapper>
                    </CharacterCardContainer>
                ) : (
                    <p style={{paddingBottom:"20px"}}>Select a location from the options above.</p>
                )}

            </CharacterWrapper>
        </LocationContainer>
    );
};

export default Locations;
