import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   body {
    background-color:black;
    margin:0;
    padding:0;
    overflow:hidden;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   }

   h1{
     font-size:24px;
     color:white;
     font-weight:400;
   }
//ScrollCustom
    ::-webkit-scrollbar {
      width: 5px;
    }

  /* Track */
      ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px grey;
        border-radius: 5px;
        background-color: rgba(73, 149, 181, 0.3);
      }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: rgba(73, 149, 181, 0.9);
      border-radius: 5px;
      scroll-margin-block-end:30px;
    }

//PlaceHolderCustom
  ::-webkit-input-placeholder {
    color: rgba(73, 149, 181, 0.5);
  }
`;

export const MainRow = styled.div`
  width:100%;
  height:100vh;
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
  align-items:center;
`;
