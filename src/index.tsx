import * as React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './app'
import { store } from './store'

const root = document.querySelector('#root')
const render = (): void => {
  if (root) {
    ReactDom.render(
      <Provider store={store}>
        <App />
      </Provider>,
      root,
    )
  }
}

render()
