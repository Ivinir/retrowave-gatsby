import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import Layout from '../Layout/Layout.jsx';

import 'typeface-press-start-2p';
import 'typeface-vt323';
import 'typeface-major-mono-display';

import commonEn from '../../translations/en/common.json';
import commonEs from '../../translations/es/common.json';
import commonZh from '../../translations/zh/common.json';
import commonIt from '../../translations/it/common.json';
import StartMenuContext from '../../context/StartMenuContext';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources: {
    en: {
      common: commonEn,
    },
    es: {
      common: commonEs,
    },
    zh: {
      common: commonZh,
    },
    it: {
      common: commonIt,
    },
  },
});

const App = ({ children }) => {
  const [startMenuActive, setStartMenuActive] = useState({ isActive: false });

  return (
    <I18nextProvider i18n={i18next}>
      <StartMenuContext.Provider value={[startMenuActive, setStartMenuActive]}>
        <Layout>
          {children}
        </Layout>
      </StartMenuContext.Provider>
    </I18nextProvider>
  );
};

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
