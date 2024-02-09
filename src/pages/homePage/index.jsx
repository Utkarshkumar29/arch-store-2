import React from "react";
import { HomePageContainer, HomePageWrapper, ImageWrapper, StyledCharacterSection, TextWrapper } from "../../styles/homePage";
import Image1 from "../../assets/Image1.jpg"
import Image2 from "../../assets/Image2.jpg"
import Image3 from "../../assets/Image3.jpg"
import { Link } from "react-router-dom";


const HomePage=()=>{
    return(
        <HomePageContainer>
            <HomePageWrapper>
                <StyledCharacterSection>
                    <Link to='/episodes'>
                        <ImageWrapper imageUrl={Image1}></ImageWrapper>
                        <TextWrapper>Episodes</TextWrapper>
                    </Link>
                </StyledCharacterSection>

                <StyledCharacterSection>
                    <Link to='/characters'>
                        <ImageWrapper imageUrl={Image2}></ImageWrapper>
                        <TextWrapper>Characters</TextWrapper>
                    </Link>
                </StyledCharacterSection>

                <StyledCharacterSection>
                    <Link to='/locations'>
                        <ImageWrapper imageUrl={Image3}></ImageWrapper>
                        <TextWrapper>Locations</TextWrapper>
                    </Link>
                </StyledCharacterSection>
            </HomePageWrapper>
        </HomePageContainer>
    )
}

export default HomePage
