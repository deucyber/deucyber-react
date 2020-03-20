import React, { Component } from 'react';
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom';
import { Anasayfa } from './Anasayfa';
import { Hakkimizda } from './Hakkimizda';
import { Duyurular } from './Duyurular';
import { Iletisim } from './Iletisim';
import { Cyberblog } from './Cyberblog';
import { Ctfpaneli } from './Ctfpaneli';
import { Testpage } from './Testpage';
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
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Anasayfa} />
              <Route path="/hakkimizda" component={Hakkimizda} />
              <Route path="/duyurular" component={Duyurular} />
              <Route path="/iletisim" component={Iletisim} />
              <Route path="/blog" component={Cyberblog} />
              <Route path="/ctf" component={Ctfpaneli} />
              <Route path="/testpage" component={Testpage} />
              <Route component={NoMatch} />
            </Switch>
          </BrowserRouter>
        </Layout>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;