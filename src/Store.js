import numReducer from './reducers/numReducer';
import editStatusReducer from './reducers/editStatusReducer';

var redux = require('redux');

const allReducers = redux.combineReducers({
  num: numReducer,
  editStatus: editStatusReducer
})

var store1 = redux.createStore(allReducers);
store1.subscribe(() => {
  console.log(JSON.stringify(store1.getState()));
})

store1.dispatch({
  type: "ADD_NEW",
  newItem: 'Loa vi tinh'
})
store1.dispatch({
  type: "EDIT_STATUS",
})
store1.dispatch({
  type: "DELETE",
  number: 1
})
export default store1;