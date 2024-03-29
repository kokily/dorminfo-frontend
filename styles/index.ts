import { createGlobalStyle, css } from 'styled-components';

const mediaQuery = (max_width: number) => `
  @media (max-width: ${max_width}px)
`;

export const media = {
  large: mediaQuery(1200),
  medium: mediaQuery(992),
  small: mediaQuery(768),
  xsmall: mediaQuery(376),
};

// 그림자 효과: https://codepen.io/sdthornton/pen/wBZdXq 기반
export const shadow = (weight: number) => {
  const shadows = [
    css`
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    `,
    css`
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    `,
    css`
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    `,
    css`
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    `,
    css`
      box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
        0 15px 12px rgba(0, 0, 0, 0.22);
    `,
  ];

  return shadows[weight];
};

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  // Info Window Style
  .info_container {
    display: flex;
    align-items: center;
    overflow: hidden;
    border: 2px solid #5e79fc;
    border-radius: 50px;
    background: #fff;
  }

  .icon_circle {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 0.5rem;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  .info_contents {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0.5rem;

    .title {
      font-size: 14px;
      font-weight: bold;
      margin-top: 0.1rem;
      margin-bottom: 0.2rem;
      color: #0168c3;
      overflow: auto;
    }

    .address {
      font-size: 12px;
      overflow: auto;
    }
  }
`;

export default GlobalStyle;
