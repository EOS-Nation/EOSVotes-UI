import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { I18nextProvider } from 'react-i18next';
import configureStore from 'store/configureStore'
import App from './app';
import i18n from './i18n';
import About from './containers/about/about';
import Credits from './containers/credits/credits';
import Proxy from './containers/proxy/proxy';
import Forum from './containers/forum/forum';
import WPS from './containers/wps/wps';
import FAQ from './containers/faq/faq';

const store = configureStore();

function render(){
  ReactDOM.render(
    <Provider store={store}>
      <I18nextProvider i18n={ i18n }>
        <Router>
          <div>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/credits" component={Credits} />
            <Route path="/proxy" component={Proxy} />
            <Route path="/forum" component={Forum} />
            <Route path="/wps" component={WPS} />
            <Route path="/faq" component={FAQ} />
          </div>
        </Router>
      </I18nextProvider>
    </Provider>,    
    window.document.getElementById('root'));
}

if (module.hot) {
  module.hot.accept('./app', () => {
    window.console.clear();
    render();
  });
}

window.addEventListener('load', render);
