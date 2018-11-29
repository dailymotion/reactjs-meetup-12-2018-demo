import React from 'react'
import { hydrate } from 'react-dom'

import App from './App/App'

window.performance.mark('react_app_execution')
window.performance.measure('time_to_react_app_execution', 'html_parse_start', 'react_app_execution')

hydrate(<App />, document.getElementById('root'))
