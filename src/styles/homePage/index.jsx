import styled from "styled-components";

export const HomePageContainer=styled.div`
    max-width: 2600px;
    width: 100%;
    height: 100%;
`;

export const HomePageWrapper=styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

export const StyledCharacterSection=styled.div`
    overflow: hidden;
    max-width: 1200px;
    width: 100%;
    height: 100vh;
    position: relative;
`

export const ImageWrapper=styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    filter: grayscale(50%) brightness(50%);
    cursor: pointer;
    transition: grayscale 0.6s, transform 0.6s;

    &:hover{
        filter: grayscale(0%) brightness(100%);
        transform: scale(1.25)
    }
`

export const TextWrapper=styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    font-size: 40px;
    color: white;
`