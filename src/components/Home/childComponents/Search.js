import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Input } from 'antd'

class Search extends Component {
  constructor () {
    super()
    this.state = {
      searchNote: ''
    }
  }
  onSearch = () => {
    if (this.state.searchNote.length > 0) {
      const filterNote = this.props.main.notes.filter(note => {
        if (
          note.title
            .toLowerCase()
            .includes(this.state.searchNote.toLowerCase()) ||
          note.message
            .toLowerCase()
            .includes(this.state.searchNote.toLowerCase())
        ) {
          return true
        } else {
          return false
        }
      })
      console.log('Filtered Note', filterNote)
      this.props.setSearchNote(filterNote)
    } else {
      this.props.setSearchNote([])
    }
  }

  render () {
    const { searchNote } = this.state
    return (
      <div>
        <Input.Search
          placeholder='Search Notes...'
          value={searchNote}
          onChange={e => this.setState({ searchNote: e.target.value })}
          onSearch={() => this.onSearch()}
        />
      </div>
    )
  }
}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
  setSearchNote (arr) {
    dispatch({
      type: 'SEARCH_NOTES',
      payload: arr
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
