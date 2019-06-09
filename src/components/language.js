import React, { useState } from "react";
import { changeLocale } from "gatsby-plugin-intl";

import { MenuItemStyle } from "./styled";

const nextLocale = {
  ja: "English",
  en: "日本語",
};

const Language = () => {
  const [currentLocale, setLocale] = useState(window.___gatsbyIntl["language"]);

  const switchLocale = () => {
    const newLocale = currentLocale === "en" ? "ja" : "en";
    setLocale(newLocale);
    changeLocale(newLocale);
  };

  return (
    <MenuItemStyle>
      <button onClick={() => switchLocale()}>
        {nextLocale[currentLocale]}
      </button>
    </MenuItemStyle>
  );
};

export default Language;
