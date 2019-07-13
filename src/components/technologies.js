import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl } from "gatsby-plugin-intl";

import { Section } from "../css/style";

import {
  TechFinanceTile,
  TechAIMLTile,
  TechCGTile,
  TechEnterpriseTile,
} from "../resources/techTiles";

const TechBox = styled.div`
  margin-left: 20rem;
  margin-right: 20rem;
  display: grid;

  @media screen and (max-width: 599px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    grid-gap: 2vh 2vw;
  }

  @media screen and (min-width: 600px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 2vh 2vw;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 4vh 4vw;
  }
`;

const Technologies = ({ intl }) => (
  <Section>
    <h2 lang={intl.locale}>{intl.formatMessage({ id: "techHeading" })}</h2>
    <TechBox>
      <TechFinanceTile intl={intl} />
      <TechAIMLTile intl={intl} />
      <TechCGTile intl={intl} />
      <TechEnterpriseTile intl={intl} />
    </TechBox>
  </Section>
);

Technologies.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Technologies);
