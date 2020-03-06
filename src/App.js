import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Anasayfa } from './Anasayfa';
import { Hakkimizda } from './Hakkimizda';
import { Duyurular } from './Duyurular';
import { NoMatch } from './NoMatch';
import { Layout } from './components/Layout';
import { NavigationBar } from './components/NavigationBar';
import Helmet from 'react-helmet';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Helmet bodyAttributes={{ style: "background-color: #222223" }} />
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/index.html" component={Anasayfa} />
              <Route exact path="/" component={Anasayfa} />
              <Route path="/hakkimizda" component={Hakkimizda} />
              <Route path="/duyurular" component={Duyurular} />
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