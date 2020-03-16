import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import Header from './Header.js'
import NotesList from './NotesList.js'

class Home extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    return <div />
  }
}

const mapStateToProps = state => {
  console.log('Home State:', state)
  return state
}

const mapDispatchToProps = dispatch => ({})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
