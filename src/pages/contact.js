import React, { useState } from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import { SectionContainer, SectionHeading } from "../components/styled";

const FormFieldStyle = styled.div`
  margin: 2rem 5rem 2rem 5rem;
`;

const labelStyle = {
  color: "var(--secondary-color)",
  fontSize: "var(--h2-font-size)",
};

const abbrStyle = {
  color: "var(--ternary-color)",
};

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
          {"We\u2019d love to hear from you and see what you are building"}
        </SectionHeading>
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
            <label htmlFor="name" style={labelStyle}>
              What is your name?
              <abbr title="required" style={abbrStyle}>
                {"\u0020*"}
              </abbr>
            </label>
            <div>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Jane Smith"
                type="text"
                name="name"
                required
              />
            </div>
          </FormFieldStyle>
          <FormFieldStyle>
            <label htmlFor="name" style={labelStyle}>
              What is your email address?
              <abbr title="required" style={abbrStyle}>
                {"\u0020*"}
              </abbr>
            </label>
            <div>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@domain.com"
                type="email"
                name="email"
                required
              />
            </div>
          </FormFieldStyle>
          <FormFieldStyle>
            <label htmlFor="name" style={labelStyle}>
              What is the name of your company?
              <abbr title="required" style={abbrStyle}>
                {"\u0020*"}
              </abbr>
            </label>
            <div>
              <input
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                placeholder="Company Name"
                type="text"
                name="companyName"
                required
              />
            </div>
          </FormFieldStyle>
          <FormFieldStyle>
            <label htmlFor="name" style={labelStyle}>
              What stage is your company?
              <abbr title="required" style={abbrStyle}>
                {"\u0020*"}
              </abbr>
            </label>
            <div>
              <input
                value={stage}
                onChange={e => setStage(e.target.value)}
                placeholder="Seed, Early, or Growth"
                type="text"
                name="stage"
                required
              />
            </div>
          </FormFieldStyle>
          <FormFieldStyle>
            <label htmlFor="name" style={labelStyle}>
              Please describe your company in one sentence
              <abbr title="required" style={abbrStyle}>
                {"\u0020*"}
              </abbr>
            </label>
            <div>
              <input
                value={sentence}
                onChange={e => setSentence(e.target.value)}
                placeholder="We are building . . ."
                type="text"
                name="sentence"
                required
              />
            </div>
          </FormFieldStyle>
          <FormFieldStyle>
            <button type="submit">Submit</button>
          </FormFieldStyle>
        </form>
      </SectionContainer>
    </Layout>
  );
}

export default Form;
