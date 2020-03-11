import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Anasayfa } from './Anasayfa';
import { Hakkimizda } from './Hakkimizda';
import { Duyurular } from './Duyurular';
import { Iletisim } from './Iletisim';
import { Cyberblog } from './Cyberblog';
import { Ctfpaneli } from './Ctfpaneli';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import Helmet from 'react-helmet';
import Footer from './components/Footer';
import { createBrowserHistory } from 'history';

class App extends Component {
  render() {
    const history = createBrowserHistory();
    const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];
    if (path) {
      history.replace(path);
    }
    return (
      <React.Fragment>
        <Helmet bodyAttributes={{ style: "background-color: #222223" }} />
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Anasayfa} />
              <Route exact path="/anasayfa" component={Anasayfa} />
              <Route path="/hakkimizda" component={Hakkimizda} />
              <Route path="/duyurular" component={Duyurular} />
              <Route path="/iletisim" component={Iletisim} />
              <Route path="/blog" component={Cyberblog} />
              <Route path="/ctf" component={Ctfpaneli} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;