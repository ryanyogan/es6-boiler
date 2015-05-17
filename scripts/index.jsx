import React from 'react';
import FluxComponent from 'flummox/component';
import App from './app.jsx';
import AppFlux from './flux/appFlux.js';

let flux = new AppFlux();

// Show the react dev tools
if (typeof window !== 'undefined') {
  window.react = React;
}

React.render(
  <FluxComponent
    flux={flux}
    connectToStore={['TodoStore']}
    render={(storeState) => <App {...storeState} />}
  />,
  document.getElementById('App')
);
