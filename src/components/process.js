import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";

import { Section } from "../css/style";

const Process = ({ intl }) => (
  <Section>
    <h2 lang={intl.locale}>{intl.formatMessage({ id: "processHeading" })}</h2>
  </Section>
);

Process.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectIntl(Process);
