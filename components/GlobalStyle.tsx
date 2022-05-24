import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pretendard';
    font-weight: 700;
    font-display: swap;
    src: local("Pretendard Bold"), url("../../fonts/Pretendard-Bold.subset.woff2") format("woff2"), url("../../fonts/Pretendard-Bold.subset.woff") format("woff")
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 600;
    font-display: swap;
    src: local("Pretendard SemiBold"), url("../../fonts/Pretendard-SemiBold.subset.woff2") format("woff2"), url("../../fonts/Pretendard-SemiBold.subset.woff") format("woff")
  }

  @font-face {
    font-family: 'Pretendard';
    font-weight: 400;
    font-display: swap;
    src: local("Pretendard Regular"), url("../../fonts/Pretendard-Regular.subset.woff2") format("woff2"), url("../../fonts/Pretendard-Regular.subset.woff") format("woff")
  }

  @font-face {
    font-family: 'ASMS W90 Bold';
    font-weight: bold;
    src: url("../../fonts/ASMS_Bold.woff2") format("woff2"), url("../../fonts/ASMS_Bold.woff") format("woff")
  }

  html {
    height: 100%
  }

  body {
    height: 100%;
    background: #fff;
    color: #0d1240;
    font-size: 16px;
    font-family: "SFUIDisplay", "NotoSansCJKkr", "Roboto", "Droid Sans", "Malgun Gothic", "Helvetica", "Apple-Gothic", "애플고딕", "Tahoma", dotum, "돋움", gulim, "굴림", sans-serif;
    word-wrap: break-word;
    -webkit-text-size-adjust: none
  }

  @media (min-width: 786px) {
    body {
      font-size: 14px
    }
  }

  strong {
    font-weight: bold
  }

  body,
  div,
  dl,
  dt,
  dd,
  ul,
  ol,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  pre,
  form,
  fieldset,
  input,
  select,
  textarea,
  p,
  blockquote,
  th,
  td,
  legend,
  button,
  strong,
  a {
    margin: 0;
    padding: 0;
    word-wrap: break-word
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #0d1240
  }

  article,
  section,
  nav,
  header,
  footer,
  main {
    display: block
  }

  table {
    width: 100%;
    border-spacing: 0
  }

  table th {
    font-weight: normal
  }

  form,
  fieldset,
  img {
    border: 0 none
  }

  ul,
  ol,
  li {
    list-style: none outside
  }

  a {
    text-decoration: none;
    color: #0d1240
  }

  i,
  em,
  address {
    font-style: normal
  }

  button {
    cursor: pointer;
    -webkit-border-radius: 0;
    border-radius: 0;
    border: none;
    box-sizing: border-box;
    -webkit-appearance: none;
    font-size: 14px;
    font-family: "SFUIDisplay", "NotoSansCJKkr", "Roboto", "Droid Sans", "Malgun Gothic", "Helvetica", "Apple-Gothic", "애플고딕", "Tahoma", dotum, "돋움", gulim, "굴림", sans-serif;
    background: none
  }

  input[type=search]::-webkit-search-cancel-button {
    -webkit-appearance: none
  }

  legend,
  caption {
    overflow: hidden;
    display: inline-block;
    font-size: 1px;
    line-height: 0;
    text-indent: -9999px;
    text-align: left;
    position: absolute
  }

  hr {
    display: none
  }

  input[type="text"],
  input[type="password"],
  input[type="number"],
  input[type="date"],
  input[type="search"],
  input[type="tel"] {
    width: 100%;
    height: 60px;
    padding: 0 15px;
    background-color: rgba(85, 57, 255, 0.03);
    color: #0d1240;
    font-family: "SFUIDisplay", "NotoSansCJKkr", "Roboto", "Droid Sans", "Malgun Gothic", "Helvetica", "Apple-Gothic", "애플고딕", "Tahoma", dotum, "돋움", gulim, "굴림", sans-serif;
    font-size: 16px;
    outline: 0 none;
    border-radius: 2px;
    border: none;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-font-smoothing: antialiased
  }
`;

export default GlobalStyle;
