import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
   *{
   margin:0px;
   padding:0px;
   box-sizing:border-box;
   }

   body{
      color:#fff;
      background-color:#ebf2f5;
   }

   body, input, button, textarea{
      font-family:'Nunito',sans-serif;
   }
`;

