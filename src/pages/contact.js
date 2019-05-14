import React, { useState } from "react";

import Layout from "../components/layout";
import {
  Container,
  SectionHeading,
  SectionParagraph,
} from "../components/styled";

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
      <Container>
        <SectionHeading>
          {"We\u2019d love to hear from you and see what you are building"}
        </SectionHeading>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="botField"
        >
          <p hidden>
            <label>
              Do not fill this out:{" "}
              <input
                name="botField"
                onChange={e => setBotField(e.target.value)}
                type="hidden"
                value={botField}
              />
            </label>
          </p>
          <SectionParagraph>
            <label>
              What is your name?
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Jane Smith"
                type="text"
                name="name"
                required
              />
            </label>
          </SectionParagraph>
          <SectionParagraph>
            <label>
              What is email address?
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="name@domain.com"
                type="email"
                name="email"
                required
              />
            </label>
          </SectionParagraph>
          <SectionParagraph>
            {" "}
            <label>
              What is the name of your company?
              <input
                value={companyName}
                onChange={e => setCompanyName(e.target.value)}
                placeholder="Company Name"
                type="text"
                name="companyName"
                required
              />
            </label>
          </SectionParagraph>
          <SectionParagraph>
            <label>
              What stage is your company?
              <input
                value={stage}
                onChange={e => setStage(e.target.value)}
                placeholder="Seed, Early, or Growth"
                type="text"
                name="stage"
                required
              />
            </label>
          </SectionParagraph>
          <SectionParagraph>
            <label>
              Please describe your company in one sentence
              <input
                value={sentence}
                onChange={e => setSentence(e.target.value)}
                placeholder="We are building . . ."
                type="text"
                name="sentence"
                required
              />
            </label>
          </SectionParagraph>
          <button type="submit">Submit</button>
        </form>
      </Container>
    </Layout>
  );
}

export default Form;
