import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import LandingPage from './LandingPage';

class App extends Component {

  state = {
    route: '/',
    routes: [
      '/'
    ],

    postData: [

    ]
  }

  render() {
    return (
      <div>

        <LandingPage />
        
      </div>
    )
  }
}

export default withRouter(App)