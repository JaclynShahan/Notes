import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import Header from './childComponents/Header.js'
import NotesList from './childComponents/NotesList.js'

class Home extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount = () => {
    Axios.get(`/api/getNotes`).then(resp => {
      console.log(resp)
      this.props.setNotesList(resp.data)
    })
  }
  whichData = () => {
    return this.props.main.notes
  }
  render () {
    console.log(this.props)
    return (
      <div>
        <Header />
        {this.whichData(note => (
          <NotesList
            key={note.id}
            id={note.id}
            title={note.title}
            date={note.date}
            message={note.message}
          />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('Home State:', state)
  return state
}

const mapDispatchToProps = dispatch => ({
  setNotesList (arr) {
    dispatch({
      type: 'NOTES_LIST',
      payload: arr
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
