import React from "react";
import PropTypes from "prop-types";
import { UList } from "../css/style";
import { injectIntl } from "gatsby-plugin-intl";
import styled from "styled-components";

import { Section } from "../css/style";
import { industryListBullet } from "../resources/icons";

const ListBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: baseline;

  @media screen and (min-width: 600px) {
    width: 80%;
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
  }
`;

const Industries = ({ intl }) => {
  const industryList1 = [
    "industriesListAgricultureFood",
    "industriesListArchitecture",
    "industriesListConstruction",
    "industriesListDesign",
    "industriesListEngineering",
    "industriesListFilm",
    "industriesListGames",
    "industriesListInsurance",
  ];

  const industryList2 = [
    "industriesListLaw",
    "industriesListLogistics",
    "industriesListManufacturing",
    "industriesListMediaEntertainment",
    "industriesListProperty",
    "industriesListTransportation",
    "industriesListVCPrivateEquity",
  ];

  const renderList = industryList =>
    industryList.map(x => (
      <li key={x}>
        {industryListBullet} {intl.formatMessage({ id: x })}
      </li>
    ));

  return (
    <Section>
      <h2 lang={intl.locale}>
        {intl.formatMessage({ id: "industriesHeading" })}
      </h2>
      <p lang={intl.locale}>{intl.formatMessage({ id: "industriesBody" })}</p>
      <ListBox>
        <UList lang={intl.locale}>{renderList(industryList1)}</UList>
        <UList lang={intl.locale}>{renderList(industryList2)}</UList>
      </ListBox>
    </Section>
  );
};

Industries.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Industries);
