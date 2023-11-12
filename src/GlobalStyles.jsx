import 'modern-normalize';
import { createGlobalStyle } from 'styled-components';
import ManropeMedium from './fonts/Manrope-Medium.woff2';
import ManropeRegular from './fonts/Manrope-Regular.woff2';
import ManropeSemiBold from './fonts/Manrope-Semibold.woff2';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Manrope';
        src: url(${ManropeMedium}) format('woff2'),
            url(${ManropeRegular}) format('woff2'),
            url(${ManropeSemiBold}) format('woff2');
    }

    &.hidden {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
    }

    *,
    *::before,
    *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    a {
        text-decoration: none;
    }
`;
