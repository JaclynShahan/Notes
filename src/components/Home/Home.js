import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import Header from './childComponents/Header.js'
import NotesList from './childComponents/NotesList.js'
import {Button} from 'antd'

class Home extends Component {
  constructor () {
    super()
    this.state = {}
  }

  componentDidMount = () => {

    Axios.get(`/api/getNote`).then(resp => {
      console.log(resp)
      this.props.setNotesList(resp.data)
    })
  }
//   whichData = () => {
//     // return t
//   }

logoutUser = () => {
    Axios.put('/api/logout').then(resp => {
        console.log(resp)
        this.props.setPassword()
        this.props.setAuthentication(false)
    })
}
  render () {
    console.log(this.props)
    return (
      <div>
        <Header />
        <Button onClick={() => this.logoutUser()}>Logout</Button>
        {this.props.main.noteslist.map(note => (
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
  },
  setAuthentication(val) {
    dispatch({
        type: 'USER_AUTH',
        payload: val 
    })
  },
  setPassword(e) {
      dispatch({
          type: 'USER_PASSWORD',
          payload: e.target.value
      })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
