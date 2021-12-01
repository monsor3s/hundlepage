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
        display: grid;
        grid-template-columns: 2rem 1fr 2rem;
        grid-template-rows: 2rem repeat(7, 1fr) 2rem; 
    }
`;

export const Logo = styled.img `
    position: absolute;
    z-index: 0;
    width: 150px;
    height: 60px;

    grid-area: 2 / 2;
    @media only screen and (min-width: 375px) {
        
    }
`;

export const BackgroundDesk = styled.img `
    opacity: 0.6;
    width: 100vw;
    height: 100vh; 

    @media only screen and (min-width: 375px) {
        display: block;
    }
`;

export const Mockups = styled.img `
    z-index: 0;
    width: 700px;
    height: 500px;
    margin-top: 10rem;

    grid-area: 3 / 2;

    @media only screen and (min-width: 375px) {
        width: 300px;
        height: 350px;
    }
`;

export const H1 = styled.h1 `
    z-index: 0;
    font-size: 45px;
    line-height: 50px;
    font-family: Poppins;
    font-weight: 600;
    color: white;

    margin: 150px 0 0 70px;

    grid-area: 3 / 3;

    @media only screen and (min-width: 375px) {
        font-size: 30px;
    }
`;

export const Span = styled.span `
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;

    margin: 280px 0 0 70px;


    grid-area: 3 / 3;

    color: rgb(230, 225, 225);

    @media only screen and (min-width: 375px) {
        font-size: 10px;
    }
`;

export const Button = styled.button `
    width: 140px;
    height: 38px;
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
    position: absolute;
    z-index: 0;
    width: calc(100% - 40px);

    grid-area: 4 / 3;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    .fbLookup,
    .ttLookup,
    .instLookup {
        width: 3rem;
        height: 3rem;
        color: white;
        border: 1px solid #fff;
        border-radius: 2rem;
        padding: 6px;

        margin: 5px;

        &:hover {
            color: var(--magenta);
            border: 1px solid var(--magenta);
            cursor: pointer;
    }
    }
`;





