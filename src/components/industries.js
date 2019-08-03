import React from "react";
import PropTypes from "prop-types";
import { UList } from "../css/style";
import { injectIntl } from "gatsby-plugin-intl";
import styled from "styled-components";

import { Section } from "../css/style";

const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
`;

const Industries = ({ intl }) => (
  <Section lang={intl.locale}>
    <h2>{intl.formatMessage({ id: "industriesHeading" })}</h2>
    <p>{intl.formatMessage({ id: "industriesBody" })}</p>
    <ListBox>
      <UList>
        <li>{intl.formatMessage({ id: "industriesListGames" })}</li>
        <li>{intl.formatMessage({ id: "industriesListFilm" })}</li>
        <li>{intl.formatMessage({ id: "industriesListArchitecture" })}</li>
        <li>{intl.formatMessage({ id: "industriesListConstruction" })}</li>
        <li>{intl.formatMessage({ id: "industriesListDesign" })}</li>
        <li>{intl.formatMessage({ id: "industriesListEngineering" })}</li>
        <li>{intl.formatMessage({ id: "industriesListManufacturing" })}</li>
        <li>
          {intl.formatMessage({ id: "industriesListMediaEntertainment" })}
        </li>
        <li>{intl.formatMessage({ id: "industriesListAgricultureFood" })}</li>
        <li>{intl.formatMessage({ id: "industriesListInsurance" })}</li>
      </UList>
      <UList>
        <li>{intl.formatMessage({ id: "industriesListVCPrivateEquity" })}</li>
        <li>{intl.formatMessage({ id: "industriesListTransportation" })}</li>
        <li>{intl.formatMessage({ id: "industriesListLaw" })}</li>
        <li>{intl.formatMessage({ id: "industriesListLogistics" })}</li>
        <li>{intl.formatMessage({ id: "industriesListProperty" })}</li>
      </UList>
    </ListBox>
  </Section>
);

Industries.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Industries);
