import React, { useState } from "react";
import styled from "styled-components";

import Layout from "../components/layout";
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
    font-size: var(--p-font-size);
    font-color: var(--primary-color);
    transition: border-color 0.1s ease-out;
    width: 45vw;

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
  }

  .button {
    font-size: var(--p-font-size);
    color: var(--secondary-color);
    letter-spacing: var(--p-letter-spacing);
    padding: 1.5rem 1.6rem;
    border-radius: 0.8rem 0;
    text-transform: uppercase;
    border: 1px solid;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease-out;
    z-index: 1;
    background: hsla(36, 6%, 85%, 0%);
    user-select: none;

    &:hover {
      border-color: var(--primary-color);
      color: var(--ternary-color);
      background: hsla(36, 6%, 85%, 100%);
    }
  }
`;

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [stage, setStage] = useState("");
  const [sentence, setSentence] = useState("");
  const [botField, setBotField] = useState("");
  // TODO: Limit character input for sentence to 20 words

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
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="botField"
          >
            <input name="form-name" type="hidden" value="contact" />
            <p hidden>
              <label>Do not fill this out:</label>
              <input
                name="botField"
                onChange={e => setBotField(e.target.value)}
                type="hidden"
                value={botField}
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
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Jane Smith"
                type="text"
                name="name"
                className="textBox"
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
                value={email}
                onChange={e => setEmail(e.target.value)}
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
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                placeholder="Company Name"
                type="text"
                name="companyName"
                className="textBox"
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
                value={stage}
                onChange={e => setStage(e.target.value)}
                placeholder="Seed, Early, or Growth"
                type="text"
                name="stage"
                className="textBox"
                required
              />
            </FormFieldStyle>
            <FormFieldStyle>
              <label htmlFor="name" className="label">
                Please describe your company in one sentence.
                <span title="Required field" className="abbr">
                  <span aria-hidden="true"> {"\u0020*"}</span>
                </span>
              </label>
              w{" "}
              <input
                value={sentence}
                onChange={e => setSentence(e.target.value)}
                placeholder="We are building . . ."
                type="text"
                name="sentence"
                className="textBox"
                required
              />
            </FormFieldStyle>
            <FormFieldStyle>
              <button type="submit" className="button">
                submit
              </button>
            </FormFieldStyle>
          </form>
        </FormContainer>
      </SectionContainer>
    </Layout>
  );
}

export default Form;
