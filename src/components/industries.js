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
  justify-content: flex-start;
  align-items: baseline;
`;

const Industries = ({ intl }) => (
  <Section lang={intl.locale}>
    <h2>{intl.formatMessage({ id: "industriesHeading" })}</h2>
    <p>{intl.formatMessage({ id: "industriesBody" })}</p>
    <ListBox>
      <UList>
        <li>
          {industryListBullet}{" "}
          {intl.formatMessage({ id: "industriesListAgricultureFood" })}
        </li>
        <li>
          {" "}
          {industryListBullet}{" "}
          {intl.formatMessage({ id: "industriesListArchitecture" })}
        </li>
        <li>
          {" "}
          {industryListBullet}{" "}
          {intl.formatMessage({ id: "industriesListConstruction" })}
        </li>
        <li>
          {" "}
          {industryListBullet}{" "}
          {intl.formatMessage({ id: "industriesListDesign" })}
        </li>
        <li>
          {" "}
          {industryListBullet}{" "}
          {intl.formatMessage({ id: "industriesListEngineering" })}
        </li>
        <li>
          {" "}
          {industryListBullet}{" "}
          {intl.formatMessage({ id: "industriesListFilm" })}
        </li>
        <li>
          {" "}
          {industryListBullet}{" "}
          {intl.formatMessage({ id: "industriesListGames" })}
        </li>
        <li>
          {" "}
          {industryListBullet}{" "}
          {intl.formatMessage({ id: "industriesListInsurance" })}
        </li>
        <li>
          {" "}
          {industryListBullet} {intl.formatMessage({ id: "industriesListLaw" })}
        </li>
        <li>
          {" "}
          {industryListBullet}{" "}
          {intl.formatMessage({ id: "industriesListLogistics" })}
        </li>
        <li>
          {" "}
          {industryListBullet}{" "}
          {intl.formatMessage({ id: "industriesListManufacturing" })}
        </li>
      </UList>
      <UList>
        <li>
          {industryListBullet}{" "}
          {intl.formatMessage({ id: "industriesListMediaEntertainment" })}
        </li>
        <li>
          {" "}
          {industryListBullet}{" "}
          {intl.formatMessage({ id: "industriesListProperty" })}
        </li>
        <li>
          {" "}
          {industryListBullet}{" "}
          {intl.formatMessage({ id: "industriesListTransportation" })}
        </li>
        <li>
          {" "}
          {industryListBullet}{" "}
          {intl.formatMessage({ id: "industriesListVCPrivateEquity" })}
        </li>
      </UList>
    </ListBox>
  </Section>
);

Industries.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(Industries);
