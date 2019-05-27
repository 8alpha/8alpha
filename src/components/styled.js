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
  }

  p {
    font-size: var(--p-font-size);
    color: var(--secondary-color);
    margin-top: 1vh;
    letter-spacing: var(--p-letter-spacing);
    font-weight: 100;
  }
`;

export const ButtonStyle = styled.div`
  .button {
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

    .btnText {
      font-size: var(--p-font-size);
      color: var(--primary-color);
      letter-spacing: var(--p-letter-spacing);
      transition: all 0.3s ease-out;

      &:hover {
        color: var(--secondary-color);
      }
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
  }

  p {
    font-size: var(--p-font-size);
    color: var(--secondary-color);
    margin-top: 1vh;
    letter-spacing: var(--p-letter-spacing);
    font-weight: 100;
  }

  border: 1px solid var(--secondary-color);
`;
