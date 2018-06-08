import React from 'react';
import ReactDOM from 'react-dom';
import App from './client/App.jsx';

import {HashRouter, Route, Link} from 'react-router-dom';

ReactDOM.render(<HashRouter>
      <div>
        <Route exact path='/' component={App} />
      </div>
    </HashRouter>, document.getElementById('app'));
