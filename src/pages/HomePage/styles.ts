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
    grid-template-rows: 4rem repeat(7, 1fr) 4rem;
    width: 100vw;
    height: 100vh;
    background-color: var(--violet);

`;

export const Logo = styled.img `
    position: absolute;
    z-index: 0;
    width: 150px;
    height: 60px;

    grid-area: 2 / 2;
`;

export const BackgroundDesk = styled.img `
    opacity: 0.6;
    width: 100vw;
    height: 100vh; 
    @media only screen and (min-width: 375px) {
        
    }
`;

export const Mockups = styled.img `
    z-index: 0;
    width: 700px;
    height: 500px;
    margin-top: 10rem;

    grid-area: 3 / 2;
`;

export const H1 = styled.h1 `
    z-index: 0;
    font-size: 45px;
    line-height: 50px;
    font-family: Poppins;
    font-weight: 600;
    color: white;

    grid-area: 3 / 3;

`;

export const Span = styled.span `
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;

    margin: 8rem 0 0;

    grid-area: 3 / 3;

    color: rgb(230, 225, 225);
`;

export const Button = styled.button `
    width: 100px;
    height: 27px;
    border: none;
    z-index: 0;

    margin: 15rem 0 0;
    
    font-size: 0.85rem;
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
`;

export const Footer = styled.div `
    position: absolute;
    z-index: 0;
    width: 680px;

    grid-area: 3 / 3;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    .fbLookup,
    .ttLookup,
    .instLookup {
        width: 2rem;
        height: 2rem;
        color: white;
        border: 1px solid #fff;
        border-radius: 2rem;
        padding: 7px;

        margin: 5px;

        &:hover {
            color: var(--magenta);
            border: 1px solid var(--magenta);
            cursor: pointer;
    }
    }
`;





