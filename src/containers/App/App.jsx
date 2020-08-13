import React from 'react';
import PropTypes from 'prop-types';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import Layout from '../Layout/Layout.jsx';

import commonEn from '../../translations/en/common.json';
import commonEs from '../../translations/es/common.json';
import commonZh from '../../translations/zh/common.json';
import commonIt from '../../translations/it/common.json';

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

const App = ({ children }) => (
  <I18nextProvider i18n={i18next}>
    <Layout>
      {children}
    </Layout>
  </I18nextProvider>
);

App.propTypes = {
  children: PropTypes.any.isRequired,
};

export default App;
