import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Layout from './components/shared/Layout';

import Landing from './pages/Landing';
import Campaigns from './pages/Campaigns';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Layout>
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/campaigns" exact component={Campaigns} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </Suspense>
    </Router>
  );
};

export default App;
