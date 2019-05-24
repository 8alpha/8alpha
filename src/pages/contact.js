import React, { useState } from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import Modal from "../components/modal";

import { SectionContainer, SectionHeading } from "../components/styled";

const FormContainer = styled.div`
  margin: 4vh 0 4vh 0;
`;

const FormFieldStyle = styled.div`
  margin: 2vh 5vw 2vh 5vw;

  .textBox {
    display: block;
    margin-top: 1vh;
    border: 2px solid transparent;
    border-radius: 0.8rem 0;
    padding: 1.5rem 1.6rem;
    background: var(--secondary-color);
    line-height: 1.4;
    letter-spacing: var(--p-letter-spacing);
    font-size: var(--p-font-size);
    font-color: var(--primary-color);
    transition: border-color 0.1s ease-out;
    width: 70vw;

    &:hover {
      border-color: var(--primary-color);
    }
  }

  .abbr {
    color: var(--ternary-color);
  }

  .label {
    color: var(--secondary-color);
    font-size: var(--h2-font-size);
    letter-spacing: var(--p-letter-spacing);
  }

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
    transition: all 0.5s ease-out;
    user-select: none;

    &:hover {
      border-color: var(--primary-color);
      background-position: left bottom;
    }

    .text {
      font-size: var(--p-font-size);
      color: var(--primary-color);
      letter-spacing: var(--p-letter-spacing);
      transition: all 0.6s ease-out;

      &:hover {
        color: var(--secondary-color);
      }
    }
  }
`;

function Form() {
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState({
    name: "",
    email: "",
    companyName: "",
    stage: "",
    sentence: "",
    botField: "",
  });

  const handleSubmit = e => {
    /* confirm(
     *   `Thank you, ${values.name.split(" ")[0]}. We will be in touch shortly`
     * ); */
    <Modal />;
  };

  return (
    <Layout>
      <SectionContainer>
        <SectionHeading>
          {"We\u2019d love to hear from you and see what you are building."}
        </SectionHeading>
        <FormContainer>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="botField"
            onSubmit={handleSubmit}
            action="/"
          >
            <input name="form-name" type="hidden" value="contact" />
            <p hidden>
              <label>Do not fill this out:</label>
              <input
                name="botField"
                onChange={handleInputChange}
                type="hidden"
                value={values.botField}
              />
            </p>
            <FormFieldStyle>
              <label htmlFor="name" className="label">
                What is your name?
                <span title="Required field" className="abbr">
                  <span aria-hidden="true"> {"\u0020*"}</span>
                </span>
              </label>
              <input
                value={values.name}
                onChange={handleInputChange}
                placeholder="Jane Smith"
                type="text"
                name="name"
                className="textBox"
                maxLength="50"
                required
              />
            </FormFieldStyle>
            <FormFieldStyle>
              <label htmlFor="name" className="label">
                What is your email address?
                <span title="Required field" className="abbr">
                  <span aria-hidden="true"> {"\u0020*"}</span>
                </span>
              </label>
              <input
                value={values.email}
                onChange={handleInputChange}
                placeholder="name@domain.com"
                type="email"
                name="email"
                className="textBox"
                required
              />
            </FormFieldStyle>
            <FormFieldStyle>
              <label htmlFor="name" className="label">
                What is the name of your company?
                <span title="Required field" className="abbr">
                  <span aria-hidden="true"> {"\u0020*"}</span>
                </span>
              </label>
              <input
                value={values.companyName}
                onChange={handleInputChange}
                placeholder="Company Name"
                type="text"
                name="companyName"
                className="textBox"
                maxLength="50"
                required
              />
            </FormFieldStyle>
            <FormFieldStyle>
              <label htmlFor="name" className="label">
                What stage is your company?
                <span title="Required field" className="abbr">
                  <span aria-hidden="true"> {"\u0020*"}</span>
                </span>
              </label>
              <input
                value={values.stage}
                onChange={handleInputChange}
                placeholder="Seed, Early, Growth or Mature"
                type="text"
                name="stage"
                className="textBox"
                maxLength="10"
                required
              />
            </FormFieldStyle>
            <FormFieldStyle>
              <label htmlFor="name" className="label">
                What does your company do?
                <span title="Required field" className="abbr">
                  <span aria-hidden="true"> {"\u0020*"}</span>
                </span>
              </label>
              <input
                value={values.sentence}
                onChange={handleInputChange}
                placeholder="280 characters max"
                type="text"
                name="sentence"
                className="textBox"
                maxLength="280"
                required
              />
            </FormFieldStyle>
            <FormFieldStyle>
              <button type="submit" className="button">
                <span className="text">{"\u00A0\u00A0Submit\u00A0\u00A0"}</span>
              </button>
            </FormFieldStyle>
          </form>
        </FormContainer>
      </SectionContainer>
    </Layout>
  );
}

export default Form;
