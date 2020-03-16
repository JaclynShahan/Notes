import { createStore, applyMiddleware, combineReducers } from 'redux'
import promiseMiddleware from 'redux-promise-middleware'
import main from './reducers/main.js'
import editModal from './reducers/editModal.js'
import login from './reducers/login.js'
import newNote from './reducers/newNote.js'

export default createStore(
  combineReducers({
    main,
    editModal,
    login,
    newNote
  }),
  applyMiddleware(promiseMiddleware)
)
