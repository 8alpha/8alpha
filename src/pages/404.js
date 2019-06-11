import React from "react";
import PropTypes from "prop-types";
import { Link, injectIntl } from "gatsby-plugin-intl";
import gatsbyIntlLanguage from "../utilities/gatsbyintllanguage.js";

import Layout from "../components/layout";
import { SectionStyle, LinkStyle } from "../components/styled";

const NotFoundPage = ({ intl }) => {
  const language = gatsbyIntlLanguage();

  return (
    <Layout location={"/404/"}>
      <SectionStyle>
        <h2 lang={language}>{intl.formatMessage({ id: "404Heading" })}</h2>
        <p lang={language}>{intl.formatMessage({ id: "404P1" })}</p>
        <LinkStyle>
          <Link lang={language} to="/">
            {intl.formatMessage({ id: "404GoBack" })}
          </Link>
        </LinkStyle>
      </SectionStyle>
    </Layout>
  );
};

NotFoundPage.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(NotFoundPage);
