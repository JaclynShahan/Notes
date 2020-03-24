import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Input, Button } from 'antd'

class EditModal extends Component {
  constructor () {
    super()
    this.state = {}
  }

  render () {
    const { id, title, date, message } = this.props.editModal
    console.log('EditModal Props:', this.props)
    return (
      <div>
        <Input
          onChange={e => this.props.setEditTitle(e)}
          value={this.props.editModal.title}
        />
        <Input
          onChange={e => this.props.setEditDate(e)}
          value={this.props.editModal.date}
        />
        <Input.TextArea
          onChange={e => this.props.setEditMessage(e)}
          value={this.props.editModal.message}
        />
        <Button
          onClick={() => this.props.onSave(id, title, date, message)}
          type='primary'
        >
          Save
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('Edit Modal State:', state)
  return state
}
const mapDispatchToProps = dispatch => ({
  setEditTitle (e) {
    dispatch({
      type: 'EDIT_TITLE',
      payload: e.target.value
    })
  },
  setEditDate (e) {
    dispatch({
      type: 'EDIT_DATE',
      payload: e.target.value
    })
  },
  setEditMessage (e) {
    dispatch({
      type: 'EDIT_MESSAGE',
      payload: e.target.value
    })
  },
  setEditId (e) {
    dispatch({
      type: 'EDIT_ID',
      payload: e.target.value
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditModal)
