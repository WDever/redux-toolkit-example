import App from 'App';
import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';
import reducer from 'store';
import { createGlobalStyle } from 'styled-components';

const IndexStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      'yg-jalnan', 'Spoqa Han Sans', 'Noto Sans KR', sans-serif, 'Nanum Myeongjo',
      'Open Sans', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  input {
    outline: none;
    appearance: none;
  }
  button {
    outline: none;
  }
  div {
    -webkit-touch-callout: none; // for iOS
  }
`;

const store = configureStore({ reducer });

export default function Root() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <IndexStyle />
        <App />
      </BrowserRouter>
    </Provider>
  );
}
