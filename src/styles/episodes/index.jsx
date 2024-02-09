import styled from "styled-components";

export const EpisodeCard=styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        max-width: 300px;
        width: 100%;
        max-height: 300px;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.1);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        margin-bottom: 20px;
        padding: 10px;
        overflow-y: auto;

        margin-top: 10px;

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
            max-width: 200px;
            width: 100%;
            padding: 5px;
        }
`

export const EpisodeCharacters=styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;
    align-items: center;
    padding: 5px;
`