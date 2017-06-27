import React from 'react';
import ReactDom from 'react-dom';
import Header from './components/Header.jsx';// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDom.render(<Header/>, document.getElementById('headerComponent'));