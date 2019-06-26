import React, { useState } from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import { Section } from "../css/style";
import {
  FormBox,
  FormInput,
  FormFieldBox,
  FormLabel,
  FormPanel,
  FormTextArea,
  FormValidation,
} from "../css/form";

function Contact({ intl }) {
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

    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    Object.entries(values).map(([key, value]) => {
      if (value === "" || (key === "email" && !value.match(regex))) {
        validations[key] = true;
        showValidationMsg = true;
      }
    });

    if (showValidationMsg) {
      event.preventDefault();
      setValidation({ ...defaultValidations, ...validations });
    }
  };

  const showValidationField = (
    <FormValidation lang={intl.locale}>
      {intl.formatMessage({ id: "contactValidationMsg" })}
    </FormValidation>
  );

  return (
    <Layout location="/contact/">
      <Section>
        <h2 lang={intl.locale}>
          {intl.formatMessage({ id: "contactHeading" })}
        </h2>
        <FormBox>
          <p lang={intl.locale}>{intl.formatMessage({ id: "contactP1" })}</p>
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
              <label htmlFor="botField">Do not fill this out:</label>
              <input
                name="botField"
                onChange={e => setBotValue(e.value)}
                type="hidden"
                value={botValue}
              />
            </p>
            <FormFieldBox>
              <FormLabel htmlFor="name">
                What is your name?
                <span title="Required field" className="requiredField">
                  <span aria-hidden="true"> {"\u0020*"}</span>
                </span>
              </FormLabel>
              <FormInput
                value={values.name}
                onChange={handleInputChange}
                placeholder={placeholder.name}
                type="text"
                name="name"
                maxLength="100"
                autoComplete="name"
                lang={intl.locale}
              />
              {validations["name"] && showValidationField}
            </FormFieldBox>
            <FormFieldBox>
              <FormLabel htmlFor="email">
                What is your email address?
                <span title="Required field" className="requiredField">
                  <span aria-hidden="true"> {"\u0020*"}</span>
                </span>
              </FormLabel>
              <FormInput
                value={values.email}
                onChange={handleInputChange}
                placeholder={placeholder.email}
                type="text"
                name="email"
                maxLength="100"
                autoComplete="email"
              />
              {validations["email"] && showValidationField}
            </FormFieldBox>
            <FormFieldBox>
              <FormLabel htmlFor="companyName">
                What is the name of your company?
                <span title="Required field" className="requiredField">
                  <span aria-hidden="true"> {"\u0020*"}</span>
                </span>
              </FormLabel>
              <FormInput
                value={values.companyName}
                onChange={handleInputChange}
                placeholder={placeholder.companyName}
                type="text"
                name="companyName"
                maxLength="100"
                autoComplete="organization"
              />
              {validations["companyName"] && showValidationField}
            </FormFieldBox>
            <FormFieldBox>
              <FormLabel htmlFor="stage">
                What stage is your company?
                <span title="Required field" className="requiredField">
                  <span aria-hidden="true"> {"\u0020*"}</span>
                </span>
              </FormLabel>
              <FormInput
                value={values.stage}
                onChange={handleInputChange}
                placeholder={placeholder.stage}
                type="text"
                name="stage"
                maxLength="7"
                autoComplete="nope"
              />
              {validations["stage"] && showValidationField}
            </FormFieldBox>
            <FormFieldBox>
              <FormLabel htmlFor="sentence">
                Describe your company in one sentence
                <span title="Required field" className="requiredField">
                  <span aria-hidden="true"> {"\u0020*"}</span>
                </span>
              </FormLabel>
              <FormTextArea
                value={values.sentence}
                onChange={handleInputChange}
                placeholder={placeholder.sentence}
                name="sentence"
                maxLength="280"
                rows="3"
                autoComplete="nope"
                lang={intl.locale}
              />
              {validations["sentence"] && showValidationField}
            </FormFieldBox>
            <FormPanel lang={intl.locale}>
              <button lang={intl.locale} type="submit">
                {`\u00A0\u00A0${intl.formatMessage({
                  id: "buttonSubmit",
                })}\u00A0\u00A0`}
              </button>
              <button lang={intl.locale} type="reset">
                {`\u00A0\u00A0${intl.formatMessage({
                  id: "buttonReset",
                })}\u00A0\u00A0`}
              </button>
            </FormPanel>
          </form>
        </FormBox>
      </Section>
    </Layout>
  );
}

Contact.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Contact);
