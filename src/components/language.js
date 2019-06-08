import React, { useState } from "react";
import { changeLocale } from "gatsby-plugin-intl";

import { MenuItemStyle } from "./styled";

const languageName = {
  en: "English",
  ja: "日本語",
};

const Language = () => {
  return (
    <MenuItemStyle>
      <button>{languageName[`ja`]}</button>
    </MenuItemStyle>
  );
};
export default Language;
