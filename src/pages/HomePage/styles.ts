import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 2rem repeat(2, 1fr) 2rem;
    grid-template-rows: 2rem repeat(3, 1fr) 2rem;
    width: 100vw;
    height: 100vh;

    background-color: var(--violet);

`;

export const Logo = styled.img `
    position: absolute;
    z-index: 0;
    width: 12rem;
    height: 6rem;

    grid-area: logo;
    
    padding-top: 2rem;
    
`;

export const BackgroundDesk = styled.img `
    opacity: 0.6;
    width: 100vw;
    height: 100vh;
`;

export const Mockups = styled.img `
    z-index: 0;
    width: 36rem;
    height: 30rem;

    margin-top: 3rem;
    grid-area: mockups;

`;

export const H1 = styled.h1 `
    z-index: 0;
    font-size: 2.6rem;
    line-height: 3.5rem;
    font-family: Poppins;
    font-weight: 600;
    color: white;

    margin: 2rem 0 0 1rem;
    grid-area: h1grid;

`;

export const Span = styled.span `
    font-size: 1.2rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;

    margin: 10rem 0 0 1rem;

    grid-area: spangrid;

    color: rgb(230, 225, 225);
`;

export const Button = styled.button `
    width: 10rem;
    height: 2.7rem;
    border: none;
    z-index: 0;

    margin: 16.5rem 0 0 1rem;
    
    font-size: 0.85rem;
    font-family: Poppins;
    font-weight: 400;

    grid-area: button;

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
    width: 35rem;

    grid-area: footer;

    display: flex;
    justify-content: flex-end;

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





