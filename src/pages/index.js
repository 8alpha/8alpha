import React from "react";
import Layout from "../components/layout";

const BusinessCard = () => (
  <Layout>
    <div className="pt-24 font-sans text-grey-lightest flex flex-wrap flex-col items-center content-center">
      <div className="text-5xl">8ALPHA</div>
      <div className="text-3xl pt-7">Auckland | San Francisco | Tokyo</div>
      <div className="w-1/2 pt-4 text-lg flex flex-wrap flex-row justify-between">
        <div>info @ alpha.com</div>
        <div>&copy; 2019 All Rights Reserved</div>
      </div>
    </div>
  </Layout>
);

export default BusinessCard;
