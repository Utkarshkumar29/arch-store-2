import styled from "styled-components";

export const HeaderContainer=styled.div`
    width: 100%;
    height: 100%;
    color: white;
`

export const HeaderWrapper=styled.div`
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

export const LinksWrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p{
        font-size: 40px;
        color: white;
    }
`

export const PortalWrapper = styled.div`
    width: 100px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        max-width: 100%;
        max-height: 100%;
    }
`

export const LoginWrapper=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
`