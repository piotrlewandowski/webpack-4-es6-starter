import { App } from './app';

import './styles/main.scss';

// Enable Webpack Hot Module Replacement
if (module.hot) {
  module.hot.accept('./app', () => {
    new App();
  });
}

new App();
