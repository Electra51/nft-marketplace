import React from "react";
import { Helmet } from "react-helmet";
const HelmetComponent = ({ title }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content="This is NFT Marketplace application" />
      <meta name="keywords" content="React js, Tailwindcss, NFT, Nfters" />
      <meta name="author" content="Safayet Nur" />
      <title>{title}</title>
    </Helmet>
  );
};

export default HelmetComponent;
