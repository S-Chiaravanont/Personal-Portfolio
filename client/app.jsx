import React from 'react';
import Home from './pages/home';
import Playground from './pages/playground';
import parseRoute from './lib/parse-route';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: parseRoute(window.location.hash)
      });
    });
  }

  renderThisPage() {
    const { path } = this.state.route;
    if (path === 'home' || path === '') {
      return <Home />;
    } else if (path === 'playground') {
      return <Playground />;
    }
  }

  render() {
    return (
      <div>
        { this.renderThisPage() }
      </div>
    );
  }
}
