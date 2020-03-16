const initialState = {
  title: '',
  date: '',
  message: '',
  notes: [],
  editModal: false,
  searchNotes: []
}

export default function reducer (state = initialState, action) {
  let tempState = state

  switch (action.type) {
    case 'TITLE':
      return { ...tempState, title: action.payload }
    case 'DATE':
      return { ...tempState, date: action.payload }
    case 'MESSAGE':
      return { ...tempState, message: action.payload }
    case 'NOTES_LIST':
      return { ...tempState, notes: action.payload }
    case 'EDIT_MODAL':
      return { ...tempState, editModal: action.payload }
    case 'SEARCH_NOTES':
      return { ...tempState, searchNotes: action.payload }
  }
  return tempState
}
