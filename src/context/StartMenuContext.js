import React from 'react';

const StartMenuContext = React.createContext({
  isActive: false,
});

export const StartMenuProvider = StartMenuContext.Provider;
export const StartMenuConsumer = StartMenuContext.Consumer;

export default StartMenuContext;
