import React from "react";
import PropTypes from "prop-types";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import { IntlLink, Section } from "../css/style";

const NotFoundPage = ({ intl }) => (
  <Layout location={"/404/"}>
    <Section>
      <h2 lang={intl.locale}>{intl.formatMessage({ id: "404Heading" })}</h2>
      <p lang={intl.locale}>{intl.formatMessage({ id: "404P1" })}</p>
      <IntlLink lang={intl.locale} to="/">
        {intl.formatMessage({ id: "404GoBack" })}
      </IntlLink>
    </Section>
  </Layout>
);

NotFoundPage.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(NotFoundPage);
