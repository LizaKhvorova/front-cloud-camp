import { createGlobalStyle } from "styled-components";

import Regular from "../../fonts/SBSansInterface-Regular.woff2";
// import RegularWoff from "../../fonts/SBSansInterface-Regular";
// import Semibold from "../../../public/fonts/SBSansInterface-Semibold";

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: SBSansInterface;
        src: local('SBSansInterface'), local('SBSansInterface'), url(${Regular}) format("woff2");
        font-weight: 400;
        font-style: normal;
    }
`;

export default FontStyles;
