import { App } from './app';

// Enable Webpack Hot Module Replacement
if (module.hot) {
  module.hot.accept('./app', () => {
    new App();
  });
}

new App();
