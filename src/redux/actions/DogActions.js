export function actionChangeTitle(title) {
  return {
    type: "CHANGE_TITLE",
    payload: title
  };
}
export function actionAddDog(name){
  return {
    type: "ADD_DOG",
    payload: name
  }
}
