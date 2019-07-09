import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { injectIntl } from "gatsby-plugin-intl";

import { Section } from "../css/style";
import {
  processAnalysisCard,
  processDiscoveryCard,
  processEngagementCard,
} from "../resources/cards";

const ProcessBox = styled.div`
  margin-left: 10rem;
  margin-right: 10rem;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

const ProcessCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

const Process = ({ intl }) => (
  <Section>
    <h2 lang={intl.locale}>{intl.formatMessage({ id: "processHeading" })}</h2>
    <ProcessBox>
      <ProcessCard>
        {processDiscoveryCard}
        <h3>{intl.formatMessage({ id: "processDiscoverHeading" })}</h3>
        <p>{intl.formatMessage({ id: "processDiscoverBody" })}</p>
      </ProcessCard>
      <ProcessCard>
        {processAnalysisCard}
        <h3>{intl.formatMessage({ id: "processAnalysisHeading" })}</h3>
        <p>{intl.formatMessage({ id: "processAnalysisBody" })}</p>
      </ProcessCard>
      <ProcessCard>
        {processEngagementCard}
        <h3>{intl.formatMessage({ id: "processEngagementHeading" })}</h3>
        <p>{intl.formatMessage({ id: "processEngagementBody" })}</p>
      </ProcessCard>
    </ProcessBox>
  </Section>
);

Process.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Process);
