import { createGlobalStyle } from "styled-components";
import Trenda from './Trenda.woff'
import Gilroy from './Gilroy.woff'
const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: 'Trenda';
    src: local('Trenda'),
    url(${Trenda}) format('woff')
}
@font-face {
    font-family: 'Gilroy';
    src: local('Golroy'),
    url(${Gilroy}) format('woff')
}
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing: border-box;
        font-family: 'Trenda', sans-serif;
        font-weight:400 ;
    }
    h1, h2 {
        font-family: 'Gilroy';
    }
 `;

export default GlobalStyles;
