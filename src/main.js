import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.jsx';// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDom.render(<App/>, document.getElementById('container'));