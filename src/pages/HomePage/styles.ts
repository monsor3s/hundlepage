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

<<<<<<< Updated upstream
    @media only screen and (min-width: 375px) {
        display: grid;
        grid-template-columns: 2rem 1fr 2rem;
        grid-template-rows: 2rem repeat(7, 1fr) 2rem; 
=======
    @media only screen and (max-width: 375px) {
        
>>>>>>> Stashed changes
    }
`;

export const Logo = styled.img `
    position: absolute;
    z-index: 0;
<<<<<<< Updated upstream
    width: 150px;
    height: 60px;
=======
    width: 180px;
    height: 100px;
>>>>>>> Stashed changes

    grid-area: 2 / 2;
    @media only screen and (min-width: 375px) {
        
    }
`;

export const BackgroundDesk = styled.img `
    opacity: 0.6;
    width: 100vw;
    height: 100vh; 
<<<<<<< Updated upstream

    @media only screen and (min-width: 375px) {
        display: block;
=======
    @media only screen and (max-width: 375px) {
        transform: rotate(270deg);
>>>>>>> Stashed changes
    }
`;

export const Mockups = styled.img `
    z-index: 0;
<<<<<<< Updated upstream
    width: 700px;
    height: 500px;
    margin-top: 10rem;
=======
    width: 600px;
    height: 500px;
>>>>>>> Stashed changes

    grid-area: 3 / 2;

<<<<<<< Updated upstream
    @media only screen and (min-width: 375px) {
        width: 300px;
        height: 350px;
    }
=======
    @media only screen and (max-width: 375px) {
        width: 15rem;
        height: 10rem;
}
>>>>>>> Stashed changes
`;

export const H1 = styled.h1 `
    z-index: 0;
<<<<<<< Updated upstream
    font-size: 45px;
    line-height: 50px;
=======
    font-size: 4.3rem;
    line-height: 4.8rem;
>>>>>>> Stashed changes
    font-family: Poppins;
    font-weight: 600;
    color: white;
    margin-top: 3rem;

    margin: 150px 0 0 70px;

    grid-area: 3 / 3;

    @media only screen and (min-width: 375px) {
        font-size: 30px;
    }
`;

export const Span = styled.span `
<<<<<<< Updated upstream
    font-size: 20px;
=======
    font-size: 2rem;
>>>>>>> Stashed changes
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    margin-top: 10rem;

<<<<<<< Updated upstream
    margin: 280px 0 0 70px;

=======
>>>>>>> Stashed changes

    grid-area: 3 / 3;

    color: rgb(230, 225, 225);

    @media only screen and (min-width: 375px) {
        font-size: 10px;
    }
`;

export const Button = styled.button `
<<<<<<< Updated upstream
    width: 140px;
    height: 38px;
=======
    width: 130px;
    height: 30px;
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    width: calc(100% - 40px);
=======
>>>>>>> Stashed changes

    grid-area: 4 / 3;

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;

    .fbLookup,
    .ttLookup,
    .instLookup {
<<<<<<< Updated upstream
        width: 3rem;
        height: 3rem;
        color: white;
        border: 1px solid #fff;
        border-radius: 2rem;
        padding: 6px;
=======
        width: 20px;
        height: 20px;
        color: white;
        border: 1px solid #fff;
        border-radius: 1rem;
        padding: 4px;
>>>>>>> Stashed changes

        margin: 5px;

        &:hover {
            color: var(--magenta);
            border: 1px solid var(--magenta);
            cursor: pointer;
    }
    }
`;





