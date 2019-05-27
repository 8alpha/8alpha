import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { SectionStyle, ButtonStyle } from "../components/styled";

const FormContainer = styled.div`
  margin: 2vh 6vw 2vh 6vw;
`;

const FormFieldStyle = styled.div`
  margin-bottom: 3vh;

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
    color: var(--primary-color);
    transition: border-color 0.1s ease-out;
    width: 70vw;

    &:hover {
      border-color: var(--primary-color);
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
  }

  .abbr {
    color: var(--ternary-color);
  }

  .label {
    color: var(--secondary-color);
    font-size: var(--p-font-size);
    letter-spacing: (--p-letter-spacing * 1);
  }

  .twoButtons {
    width: 25%;
    display: flex;
    flex-flow: row nowwrap;
    justify-content: space-between;
  }
`;

function ContactForm() {
  const handleInputChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const defaultValues = {
    name: "",
    email: "",
    companyName: "",
    stage: "",
    sentence: "",
  };

  const [values, setValues] = useState(defaultValues);

  const placeholder = {
    name: "Jane Smith",
    email: "name@domain.com",
    companyName: "Company Name",
    stage: "Seed, Early, Growth or Mature",
    sentence: "280 characters max",
  };

  const [botValue, setBotValue] = useState("");

  const defaultValidations = {
    name: false,
    email: false,
    companyName: false,
    stage: false,
    sentence: false,
    botField: false,
  };

  const [validations, setValidation] = useState(defaultValidations);

  const handleReset = event => {
    event.preventDefault();
    setValues({ ...values, ...defaultValues });
    setValidation({ ...validations, ...defaultValidations });
  };

  const handleSubmit = event => {
    let showValidationMsg = false;
    const prevValidations = validations;

    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    Object.entries(values).map(([key, value]) => {
      if (value === "" || (key === "email" && !value.match(regex))) {
        validations[key] = true;
        showValidationMsg = true;
      }
    });

    if (showValidationMsg) {
      event.preventDefault();
      setValidation({ ...prevValidations, ...validations });
    }
  };

  const showValidationField = (
    <div className="validationMsg">Enter a valid response to continue</div>
  );

  return (
    <Layout>
      <SectionStyle>
        <h2>Contact</h2>
        <FormContainer>
          <p>
            {"We\u2019d love to hear from you and see what you are building."}
          </p>
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="botField"
            onSubmit={handleSubmit}
            onReset={handleReset}
            action="/submitted/"
          >
            <input name="form-name" type="hidden" value="contact" />
            <p hidden>
              <label>Do not fill this out:</label>
              <input
                name="botField"
                onChange={e => setBotValue(e.value)}
                type="hidden"
                value={botValue}
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
                placeholder={placeholder.name}
                type="text"
                name="name"
                className="textField"
                maxLength="100"
              />
              {validations["name"] && showValidationField}
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
                placeholder={placeholder.email}
                type="text"
                name="email"
                className="textField"
                maxLength="100"
              />
              {validations["email"] && showValidationField}
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
                placeholder={placeholder.companyName}
                type="text"
                name="companyName"
                className="textField"
                maxLength="100"
              />
              {validations["companyName"] && showValidationField}
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
                placeholder={placeholder.stage}
                type="text"
                name="stage"
                className="textField"
                maxLength="7"
              />
              {validations["stage"] && showValidationField}
            </FormFieldStyle>
            <FormFieldStyle>
              <label htmlFor="name" className="label">
                Describe your company in one sentence
                <span title="Required field" className="abbr">
                  <span aria-hidden="true"> {"\u0020*"}</span>
                </span>
              </label>
              <textarea
                value={values.sentence}
                onChange={handleInputChange}
                placeholder={placeholder.sentence}
                name="sentence"
                className="textField"
                maxLength="280"
                rows="3"
              />
              {validations["sentence"] && showValidationField}
            </FormFieldStyle>
            <FormFieldStyle>
              <div className="twoButtons">
                <ButtonStyle>
                  <button type="submit" className="button">
                    <span className="btnText">
                      {"\u00A0\u00A0Submit\u00A0\u00A0"}
                    </span>
                  </button>
                </ButtonStyle>
                <ButtonStyle>
                  <button type="reset" className="button">
                    <span className="btnText">
                      {"\u00A0\u00A0Reset\u00A0\u00A0"}
                    </span>
                  </button>
                </ButtonStyle>
              </div>
            </FormFieldStyle>
          </form>
        </FormContainer>
      </SectionStyle>
    </Layout>
  );
}

export default ContactForm;
