import styled from "styled-components";

export const SectionStyle = styled.div`
  margin: 1vh 5vw 1vh 5vw;

  h2 {
    padding-top: 2vh;
    font-size: var(--h2-font-size);
    color: var(--primary-color);
    text-align: center;
    letter-spacing: var(--h2-letter-spacing);
    text-transform: uppercase;

    &:lang(ja) {
      font-family: "Noto Sans JP", sans-serif;
      letter-spacing: normal;
      text-transform: none;
    }
  }

  p {
    font-size: var(--p-font-size);
    color: var(--secondary-color);
    margin-top: 1vh;
    letter-spacing: var(--p-letter-spacing);
    font-weight: 100;

    &:lang(ja) {
      font-family: "Noto Sans JP", sans-serif;
      letter-spacing: normal;
    }
  }
`;

export const ButtonStyle = styled.div`
  button {
    padding: 1rem 0rem;
    border-radius: 0.8rem 0;
    text-transform: uppercase;
    border: 1px solid var(--primary-color);
    background: linear-gradient(
      to right,
      var(--primary-color) 50%,
      var(--bg-color) 50%
    );
    background-size: 200% 100%;
    background-position: right bottom;
    transition: all 0.3s ease-out;
    user-select: none;

    &:focus {
      outline: 0;
    }

    &:hover {
      border-color: var(--primary-color);
      background-position: left bottom;
    }

    font-size: var(--p-font-size);
    color: var(--primary-color);
    letter-spacing: var(--p-letter-spacing);
    transition: all 0.3s ease-out;

    &:hover {
      color: var(--secondary-color);
    }

    &:lang(ja) {
      font-family: "Noto Sans JP", sans-serif;
      letter-spacing: normal;
      text-transform: none;
    }
  }
`;

export const BoxSectionStyle = styled.div`
  margin: 1vh 5vw 1vh 5vw;
  padding: 0 2vw 2vh 2vw;

  h2 {
    font-size: var(--h2-font-size);
    color: var(--primary-color);
    text-align: center;
    letter-spacing: var(--h2-letter-spacing);
    text-transform: uppercase;

    &:lang(ja) {
      font-family: "Noto Sans JP", sans-serif;
      letter-spacing: normal;
      text-transform: none;
    }
  }

  p {
    font-size: var(--p-font-size);
    color: var(--secondary-color);
    margin-top: 1vh;
    letter-spacing: var(--p-letter-spacing);
    font-weight: 100;

    &:lang(ja) {
      font-family: "Noto Sans JP", sans-serif;
      letter-spacing: normal;
    }
  }

  border: 1px solid var(--secondary-color);
`;

export const LinkStyle = styled.div`
  a {
    font-size: var(--p-font-size);
    color: var(--primary-color);
    letter-spacing: var(--p-letter-spacing);
    text-decoration: none;

    &:active {
      color: var(--secondary-color);
    }

    &:hover {
      text-decoration: underline;
    }

    &:lang(ja) {
      font-family: "Noto Sans JP", sans-serif;
      letter-spacing: normal;
    }
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  .logo {
    /* Limit hover to size of Logo */
    flex-basis: 182px;
  }
`;

export const NavBarItemStyle = styled.div`
  a {
    font-size: var(--p-font-size);
    color: var(--primary-color);
    letter-spacing: var(--p-letter-spacing);
    text-decoration: none;

    &:active {
      color: var(--secondary-color);
    }

    &:hover {
      text-decoration: underline;
    }

    &:lang(ja) {
      font-family: "Noto Sans JP", sans-serif;
      letter-spacing: normal;
    }
  }

  button {
    border: none;
    padding: 0;
    background-color: rgba(0, 0, 0, 0);
    text-decoration: none;
    cursor: pointer;
    user-select: none;
    font-size: var(--p-font-size);
    color: var(--primary-color);
    letter-spacing: var(--p-letter-spacing);
    -webkit-appearance: none;
    -moz-appearance: none;

    &:focus {
      outline: 0;
    }

    &:hover {
      color: var(--secondary-color);
    }

    &:lang(ja) {
      font-family: "Noto Sans JP", sans-serif;
      letter-spacing: normal;
    }
  }
`;

export const FormContainer = styled.div`
  margin: 2vh 2vw 2vh 2vw;
`;

export const FormFieldStyle = styled.div`
  margin-bottom: 3vh;

  input {
    &:lang(ja) {
      font-family: "Noto Sans JP", sans-serif;
      letter-spacing: normal;
    }
  }

  .textField {
    display: block;
    margin-top: 1vh;
    border: 2px solid transparent;
    border-radius: 0.8rem 0;
    padding: 1.5rem 1.6rem;
    background: var(--secondary-color);
    line-height: 1.4;
    letter-spacing: var(--p-letter-spacing);
    font-size: var(--p-font-size);
    color: var(--bg-color);
    transition: border-color 0.1s ease-out;
    width: 80vw;

    &:hover,
    &:focus {
      border: 2px solid var(--primary-color);
    }

    &:-webkit-autofill {
      border: 2px solid transparent;
      -webkit-box-shadow: 0 0 0px 1000px var(--secondary-color) inset;
      -webkit-text-fill-color: var(--bg-color);
    }

    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: 2px solid var(--primary-color);
      -webkit-box-shadow: 0 0 0px 1000px var(--secondary-color) inset;
      -webkit-text-fill-color: var(--bg-color);
    }

    &:lang(ja) {
      font-family: "Noto Sans JP", sans-serif;
      letter-spacing: normal;
    }
  }

  .validationMsg {
    margin-top: 0.3rem;
    margin-left: 1rem;
    border: 2px solid transparent;
    border-radius: 0 0 0.8rem 0.8rem;
    padding: 1rem 1.1rem;
    background: var(--secondary-color);
    line-height: 1.4;
    letter-spacing: var(--p-letter-spacing);
    font-size: var(--p-font-size);
    color: var(--ternary-color);
    width: 69vw;

    &:lang(ja) {
      font-family: "Noto Sans JP", sans-serif;
      letter-spacing: normal;
    }
  }

  .abbr {
    color: var(--ternary-color);
  }

  .label {
    color: var(--secondary-color);
    font-size: var(--p-font-size);
    letter-spacing: (--p-letter-spacing);
  }

  .twoButtons {
    width: 22rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;

    &:lang(ja) {
      width: 20rem;
    }
  }
`;
