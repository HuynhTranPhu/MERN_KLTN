import { Menu, MenuItem } from '@material-ui/core';
//import { i18n, useTranslation } from 'i18n';
import React, {useState } from 'react';
import './index.css';
import { useTranslation } from "react-i18next";

export const languageNames ={
  vi: 'Vietnamese',
  en: 'English'
};

const LanguagePicker = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const { t, i18n } = useTranslation(['common_btbar_index']);

  const openMenu = (event) => setAnchorEl(event.currentTarget);

  const closeMenu = () => setAnchorEl(null);

  const onLanguageClick = (code) => {
    i18n.changeLanguage(code);
    closeMenu();
  };

  return (
    <>
      <a className="promotion-nav__link" onClick={openMenu} style={{ border: 'none' }}>
        <i className="promotion-nav__icon fas fa-globe-americas" />
        <span>{t('common_btbar_index:language')}</span>
      </a>

      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={!!anchorEl} onClose={closeMenu}>
        {Object.keys(languageNames).map((code) => (
          <MenuItem
            key={code}
            onClick={() => onLanguageClick(code)}
            selected={code === i18n.language}>
            {t(`common_btbar_index:${code}`)}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default LanguagePicker;
