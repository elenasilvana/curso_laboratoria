import React from "react";
import { connect } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import { actionChangeTitle, actionAddDog } from "./redux/actions/DogActions";

import AppRoutes from "./AppRoutes";

class App extends React.Component {


  render() {
    const { cambiarTitulo, titulo, perritos} = this.props;
    console.log(this.props);

    cambiarTitulo("Gloria");
    console.log(titulo);

    return (
      <BrowserRouter>
        <AppRoutes
            titulo={titulo}
         />
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return {
    perritos: state.DogReducer.dogs,
    titulo: state.DogReducer.title
  };
}

function mapDispatchToProps(dispatch) {
  return {
    cambiarTitulo: title => dispatch(actionChangeTitle(title)),
    agregarPerro: name => dispatch(actionAddDog(name))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
