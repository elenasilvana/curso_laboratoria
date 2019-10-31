import React from "react";

import { connect } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import { actionChangeTitle } from "./redux/actions/DogActions";

import AppRoutes from "./AppRoutes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { cambiarTitulo } = this.props;

    cambiarTitulo("Gloria");

    return (
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    perritos: state.DogReducer.dogs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cambiarTitulo: title => dispatch(actionChangeTitle(title))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
