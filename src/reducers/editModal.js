const initialState = {
  title: '',
  date: '',
  message: '',
  id: ''
}

export default function reducer (state = initialState, action) {
  let tempState = state

  switch (action.type) {
    case 'EDIT_TITLE':
      return { ...tempState, title: action.payload }
    case 'EDIT_DATE':
      return { ...tempState, date: action.payload }
    case 'EDIT_MESSAGE':
      return { ...tempState, message: action.payload }
    case 'EDIT_ID':
      return { ...tempState, id: action.payload }
    case 'SET_EDIT_NOTE':
      return { ...tempState, ...action.payload }
  }
  return tempState
}
