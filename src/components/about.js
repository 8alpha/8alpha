import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";

import { Section } from "../css/style";

const About = ({ intl }) => (
  <Section>
    <h2 lang={intl.locale}>{intl.formatMessage({ id: "aboutHeading" })}</h2>
    <p lang={intl.locale}>{intl.formatMessage({ id: "aboutBody" })}</p>
  </Section>
);

About.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(About);
