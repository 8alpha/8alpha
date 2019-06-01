import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import { SectionStyle, LinkStyle } from "../components/styled";

const NotFoundPage = () => (
  <Layout location={"/404/"}>
    <SectionStyle>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for doesn&#39;t exist.</p>
      <p>
        <LinkStyle>
          <Link to="/">Go back</Link>
        </LinkStyle>
      </p>
    </SectionStyle>
  </Layout>
);

export default NotFoundPage;
