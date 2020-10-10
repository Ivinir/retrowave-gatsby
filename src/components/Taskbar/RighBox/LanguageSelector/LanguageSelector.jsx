import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './LanguageSelector.module.scss';

const LanguageSelector = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation('common');

  function openMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={`languageSelector ${styles.languageSelector}`} >
      <LanguageSelectorMenu menuOpen={menuOpen} />
      <button onClick={openMenu}>{i18n.language.toUpperCase()}</button>
    </div>
  );
};

const LanguageSelectorMenu = ({ menuOpen }) => {
  const { i18n } = useTranslation('common');

  function changeLanguage(language) {
    i18n.changeLanguage(language);
  }

  if (menuOpen) {
    return (
      <div className={`languageSelectorMenu ${styles.languageSelectorMenu}`} >
        <button onClick={() => changeLanguage('es')}>ES</button>
        <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('zh')}>ZH</button>
        <button onClick={() => changeLanguage('it')}>IT</button>
      </div>
    );
  }
  return null;
};

LanguageSelectorMenu.propTyes = {
  menuOpen: PropTypes.boolean,
};

export default LanguageSelector;
