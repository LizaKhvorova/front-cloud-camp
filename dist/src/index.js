import * as React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './app';
import { store } from './store';
const root = document.querySelector('#root');
const render = () => {
    if (root) {
        ReactDom.render(React.createElement(Provider, { store: store },
            React.createElement(App, null)), root);
    }
};
render();
