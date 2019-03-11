var redux = require('redux');
var oldState ={
  num : ["man hinh", "chuot", "ban phim"],
  editStatus: true
}


const reducer1 = (state = oldState, action) => {
  switch (action.type) {
    case "EDIT_STATUS":
      return {...state, editStatus: ! state.editStatus}

    case "ADD_NEW":
      return {...state, num:[...state.num, action.newItem]}

    case "DELETE":
      return {...state, num:state.num.filter((value,i) => i!== action.number)}
    default:
      return state
  }
}
var store1 = redux.createStore(reducer1);
store1.subscribe(() => {
  console.log(JSON.stringify(store1.getState()));
})
store1.dispatch({
  type: "EDIT_STATUS"
})
export default store1;