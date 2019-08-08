import styled from "styled-components";
import { Link } from "gatsby-plugin-intl";

export const Button = styled.div`
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

    font-size: var(--p-font-size);
    color: var(--primary-color);
    letter-spacing: var(--p-letter-spacing);
    transition: all 0.3s ease-out;

    &:focus {
      outline: 0;
    }

    &:hover {
      border-color: var(--primary-color);
      color: var(--secondary-color);
      background-position: left bottom;
    }

    &:lang(ja) {
      font-family: "Noto Sans JP", sans-serif;
      letter-spacing: normal;
      text-transform: none;
    }
  }
`;

export const TwoColumns = styled.div`
  display: grid;
  grid-template-rows: auto;

  @media screen and (max-width: 599px) {
    grid-template-columns: 1fr;
    grid-row-gap: 2vw;
  }

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr;
    grid-row-gap: 2vw;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1vw;
  }
`;

export const IntlLink = styled(Link)`
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
`;

export const UList = styled.ul`
  list-style: none;
  color: var(--primary-color);
  letter-spacing: calc(var(--p-letter-spacing) * 1.1);
  font-size: calc(var(--p-font-size) * 1);
  line-height: 3rem;
  margin: 0;
  padding: 0;

  &:lang(ja) {
    font-family: "Noto Sans JP", sans-serif;
    letter-spacing: normal;
    text-transform: none;
    font-size: calc(var(--p-font-size) * 0.9);
  }
`;

export const Section = styled.div`
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

  h3 {
    padding-top: 2vh;
    font-size: var(--h3-font-size);
    color: var(--primary-color);
    text-align: left;
    letter-spacing: var(--h3-letter-spacing);
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

    &:lang(ja) {
      font-family: "Noto Sans JP", sans-serif;
      letter-spacing: normal;
    }
  }
`;

export const Spacer = styled.div`
  margin: auto;
`;

export const Table = styled.table`
  color: var(--secondary-color);
  font-size: var(--p-font-size);
  margin-top: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
  letter-spacing: 0.3rem;
  font-weight: 100;
`;
