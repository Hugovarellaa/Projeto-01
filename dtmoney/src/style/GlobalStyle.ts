import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
     :root{
         /* --background: #f0f2f5; */
        --background: #E2E8F0;
        --red: #E52E4D;
        --blue: #5429cc;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --shape:#FFFFFF;
        --green: #33CC95;
    }

    @media(max-width:1080px){
        html{
            font-size:93.75%; 
        }
    }

     @media(max-width:720px){
         html{
             font-size: 87.5%; //14px
             }
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, button, input, select, textarea{
        font-family: "Poppins",sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
        color: inherit;
    }

    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }

    .react-modal-container{
        background: rgba(0,0,0,0.5);
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: var(--shape);
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;

    }

    .react-modal-close {
         position: absolute;
         background: transparent;
         border: 0;
         top: 1.5rem;
         right: 1.5rem;
         transition: filter .2s;

         &:hover{
             filter: brightness(0.2);
         }
    }
`;
