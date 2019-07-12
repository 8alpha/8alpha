import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";

import { Section } from "../css/style";

const Services = ({ intl }) => (
  <Section>
    <h2 lang={intl.locale}>{intl.formatMessage({ id: "servicesHeading" })}</h2>
  </Section>
);

Services.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Services);
