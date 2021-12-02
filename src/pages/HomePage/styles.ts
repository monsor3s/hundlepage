import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
`;

export const ContainerBox = styled.div`
    position: relative;
    overflow: hidden;
    z-index: 1;
    display: grid;
    grid-template-columns: 4rem repeat(2, 1fr) 4rem;
    grid-template-rows: 4rem repeat(3, 1fr) 4rem;
    width: 100vw;
    height: 100vh;
    background-color: var(--violet);

    @media only screen and (min-width: 375px) {
        
    } 
`;

export const Logo = styled.img `
    position: absolute;
    z-index: 0;
    width: 180px;
    height: 100px;

    grid-area: 2 / 2;
    @media only screen and (min-width: 375px) {
        
    }
`;

export const BackgroundDesk = styled.img `
    opacity: 0.6;
    width: 100vw;
    height: 100vh; 
    @media only screen and (max-width: 375px) {
        transform: rotate(270deg);
    }
`;

export const Mockups = styled.img `
    z-index: 0;
    width: 600px;
    height: 500px;

    grid-area: 3 / 2;

    @media only screen and (min-width: 375px) {
        
    }
`;

export const H1 = styled.h1 `
    z-index: 0;
    font-size: 45px;
    line-height: 50px;
    font-family: Poppins;
    font-weight: 600;
    color: white;
    margin-top: 3rem;

    margin: 150px 0 0 70px;

    grid-area: 3 / 3;

    @media only screen and (min-width: 375px) {
        
    }
`;

export const Span = styled.span `
    font-size: 2rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    margin-top: 10rem;

    margin: 280px 0 0 70px;


    grid-area: 3 / 3;

    color: rgb(230, 225, 225);

    @media only screen and (min-width: 375px) {
        
    }
`;

export const Button = styled.button `
    width: 140px;
    height: 38px;
    width: 130px;
    height: 30px;
    border: none;
    z-index: 0;

    margin: 380px 0 0 70px;
    
    font-size: 1.2rem;
    font-family: Poppins;
    font-weight: 400;

    grid-area: 3 / 3;

    background-color: #fff;
    color: var(--violet);
    border-radius: 2rem;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    cursor: pointer;

    &:hover {
        background-color: var(--magenta);
        color: #fff;
    }

    @media only screen and (min-width: 375px) {

        }
`;

export const Footer = styled.div `
    position: relative;
    z-index: 0;
    width: calc(100% - 40px);

    grid-area: 4 / 3;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    .fbLookup,
    .ttLookup,
    .instLookup {
        width: 20px;
        height: 20px;
        color: white;
        border: 1px solid #fff;
        border-radius: 1rem;
        padding: 4px;

        margin: 5px;

        &:hover {
            color: var(--magenta);
            border: 1px solid var(--magenta);
            cursor: pointer;
    }
    }
`;





