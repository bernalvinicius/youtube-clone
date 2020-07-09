import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './features/pages/homepage';
import Results from './features/pages/results';
import Watch from './features/pages/watch';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/results" component={Results} />
          <Route exact path="/watch" component={Watch} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
