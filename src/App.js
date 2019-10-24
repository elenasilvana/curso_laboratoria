import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import AppRoutes from './AppRoutes'

class App extends React.Component {
  constructor (props){
    super (props)
    this.state= {}
  }
  
  render() {
    return (
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    )
  }
  
}

export default App
