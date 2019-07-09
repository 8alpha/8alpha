import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";

import { Section } from "../css/style";

const Technologies = ({ intl }) => (
  <Section>
    <h2 lang={intl.locale}>{intl.formatMessage({ id: "techHeading" })}</h2>
  </Section>
);

Technologies.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(Technologies);
