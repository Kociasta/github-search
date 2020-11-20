import React        from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect
}                   from 'react-router-dom';
import { pathName } from 'api/api';

import About        from './components/About/About';
import Search       from './components/Search/Search';
import Repo         from './components/Repo/Repo';
import Repos        from './components/Repos/Repos';
import Layout       from './theme/Layout/Layout';
import Title        from './theme/Title/Title';

const noSite = () => <Title title='404' />;


const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path={`${pathName}/`}>
            <Redirect exact to={`${pathName}/search`} />
          </Route>
          <Route exact path={`${pathName}/search`} component={Search} />
          <Route exact path={`${pathName}/:username/repos`} component={Repos} />
          <Route exact path={`${pathName}/:username/repos/:repo`} component={Repo} />
          <Route exact path={`${pathName}/about`} component={About} />
          <Route component={noSite} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
