import styled from "styled-components";
import Wall from "../../assets/wallpaper.png"

export const CharacterContainer=styled.div`
    max-width: 2600px;
    width: 100%;
    height: 100%;
    background: url(${Wall}) no-repeat center center fixed;
    background-size: cover;
    color: white;
`

export const CharacterWrapper=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TitleWrapper=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SearchWrapper=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 15px;
`

export const SearchLabel=styled.label`
    margin-right: 10px;
    color: #fff;

    @media (max-width:352px) {
        font-size: 13.5px;
    }   
`

export const Btn=styled.button`
    padding: 10px 20px;
    margin: 0 10px;
    background-color: #2f8941;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 1em;
`

export const SearchInput=styled.input`
    margin: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    max-width: 300px;
    width: 100%;
`

export const CharacterCardContainer=styled.div`
    padding: 20px;
    border-radius: 8px;

    @media (max-width:450px) {
        padding: 0px;
    }
`

export const CharacterCardWrapper=styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    align-items: center;

    @media (max-width:700px) {
        gap: 10px;
    }

    @media (max-width:374px) {
        padding: 15px;
    }

    h2 {
        margin-bottom: 10px;
        font-size: 1.5em;
        color: #fff;
    }

    p {
        color: #fff;
        margin: 5px 0;
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 4px;
        margin-top: 10px;
    }
`

export const CharacterCard=styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        max-width: 300px;
        width: 100%;
        background-color: rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        margin-bottom: 20px;
        padding: 10px;
        margin-top: 10px;
        width: 100%;

        &::-webkit-scrollbar {
            width: 8px;
        }

        &::-webkit-scrollbar-track {
            background-color: #f1f1f1;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #888;
            border-radius: 4px;
        }

        &::-webkit-scrollbar-thumb:hover {
            background-color: #555;
        } 

        @media (max-width:700px) {
            max-width: 300px;
            width: 100%;
            padding: 5px;
        }
`

export const Characters=styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    align-items: center;
    padding: 5px;
`

export const PaginationButtons=styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 20px;

    button {
        padding: 10px 20px;
        margin: 0 10px;
        background-color: #3498db;
        color: #fff;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1em;

        &:disabled {
            background-color: #ccc;
            cursor: not-allowed;
        }
    }
`

export const TitleImage=styled.img`
    @media (max-width:550px) {
        max-width: 400px;
        width: 100%;
        height: auto;
    }
`

export const Spinner=styled.img`
    animation: spin 1s linear infinite;
    
    @keyframes spin {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`
