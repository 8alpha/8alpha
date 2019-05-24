import styled from "styled-components";

export const SectionStyle = styled.div`
  margin: 2vh 5vw 2vh 5vw;

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
