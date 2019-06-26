import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { injectIntl } from "gatsby-plugin-intl";

import Layout from "../components/layout";
import About from "../components/about";
import { Button, Section } from "../css/style";

const Submitted = ({ intl }) => (
  <Layout location="/submitted/">
    <Section>
      <h2 lang={intl.locale}>
        {intl.formatMessage({ id: "submittedHeading" })}
      </h2>
      <p lang={intl.locale}>{intl.formatMessage({ id: "submittedP1" })}</p>
      <Link to="/">
        <Button>
          <button lang={intl.locale}>
            {`\u00A0\u00A0${intl.formatMessage({
              id: "buttonHide",
            })}\u00A0\u00A0`}
          </button>
        </Button>
      </Link>
    </Section>
    <About />
  </Layout>
);

Submitted.propTypes = {
  intl: PropTypes.object.isRequired,
};

export default injectIntl(Submitted);
