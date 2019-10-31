const INITIAL_STATE = {
  title: "Lomitos recargados",
  dogs: [
    {
      name: "Fuhrerlais",
      religion: "Agnostic"
    }
  ]
};

function DogReducer(prevState = INITIAL_STATE, action) {
  switch (action.type) {
    case "CHANGE_TITLE":
      return {
        ...prevState,
        title: action.payload
      };
    default:
      return prevState;
  }
}

export default DogReducer;
