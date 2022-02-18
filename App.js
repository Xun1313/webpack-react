import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { lazy, Suspense } from 'react';

const App = () => {
  return (
    /*  basename={'/index.html/'} */
    <Suspense fallback={<div></div>}>
      <Router basename={'/index.html/'}>
        <Switch>
          <Route exact path="/" component={lazy(() => import(/* webpackChunkName: 'index' */'@/pages/index.js'))} />
          <Route path="/about" component={lazy(() => import(/* webpackChunkName: 'about' */'@/pages/about.js'))} />
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
