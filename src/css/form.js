import styled from "styled-components";

export const FormBox = styled.div`
  margin: 2vh 2vw 2vh 2vw;
`;

export const FormFieldBox = styled.div`
  margin-bottom: 3vh;
`;

export const FormInput = styled.input`
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
`;

export const FormLabel = styled.label`
  color: var(--secondary-color);
  font-size: var(--p-font-size);
  letter-spacing: (--p-letter-spacing);

  .requiredField {
    color: var(--ternary-color);
  }
`;

export const FormPanel = styled.div`
  width: 22rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;

  &:lang(ja) {
    width: 20rem;
  }

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

export const FormTextArea = styled.textarea`
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
`;

export const FormValidation = styled.div`
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
`;
