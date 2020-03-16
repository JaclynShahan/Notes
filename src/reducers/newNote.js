const initialState = {
  title: '',
  date: '',
  message: '',
  showModal: false
}

export default function reducer (state = initialState, action) {
  let tempState = state

  switch (action.type) {
    case 'NEW_TITLE':
      return { ...tempState, title: action.payload }
    case 'NEW_DATE':
      return { ...tempState, date: action.payload }
    case 'NEW_MESSAGE':
      return { ...tempState, message: action.payload }
    case 'SHOW_MODAL':
      return { ...tempState, showModal: action.payload }
  }
  return tempState
}
