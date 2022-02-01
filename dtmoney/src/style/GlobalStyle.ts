import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --blue: #5429CC;
        --blue-light: #6933FF;
        --green: #33CC95;
        --red: #E52E4D;
        --shape: #FFFFFF;
        --text-title: #363F5F;
        --text-body: #969CB2;

        --background: #CBD5E0;
        /* --background: #F0F2F5; */
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @media (min-width:1080px){
        html{
            font-size: 93.75%;
        }
    }

    @media (min-width:720px){
        html{
            font-size: 87.5%;
        }
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, input, button, select, textarea {
        font-family: "Poppins", sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6 , strong {
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    a{
        color: inherit;
        text-decoration:none;
    }

    .modal-container{
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .modal-content {
        max-width: 576px;
        background: var(--background);
        padding: 3rem;
        border-radius: 0.25rem;

       
    }
`;
