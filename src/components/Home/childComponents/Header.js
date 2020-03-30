import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Button, Modal, Input } from 'antd'

class Header extends Component {
  constructor () {
    super()
    this.state = {}
  }

  onRefresh = () => {
    Axios.get(`/api/getNote`).then(resp => {
      console.log(resp)
      this.props.setNotesList(resp.data)
    })
  }

  onSave = () => {
    Axios.post(`/api/createNote`, {
      title: this.props.newNote.title,
      date: this.props.newNote.date,
      message: this.props.newNote.message
    }).then(resp => {
      this.props.setNotesList(resp.data)
      console.log('On Save Response:', resp)
    })
  }

  render () {
    return (
      <div>
        <Button onClick={() => this.props.setShowModal(true)}>Add Note</Button>
        <Button onClick={() => this.onRefresh()}>Refresh</Button>
        <Modal
          onOk={this.onSave}
          okText='Save'
          title='Add New Note...'
          onCancel={() => this.props.setShowModal(false)}
          visible={this.props.newNote.showModal}
        >
          <Input
            placeholder='Title'
            onChange={e => this.props.setNewTitle(e)}
            value={this.props.newNote.title}
          />
          <Input
            placeholder='Date'
            onChange={e => this.props.setNewDate(e)}
            value={this.props.newNote.date}
          />
          <Input.TextArea
            placeholder='Message'
            onChange={e => this.props.setNewMessage(e)}
            value={this.props.newNote.message}
          />
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('Header State:', state)
  return state
}

const mapDispatchToProps = dispatch => ({
  setShowModal (val) {
    dispatch({
      type: 'SHOW_MODAL',
      payload: val
    })
  },
  setNewTitle (e) {
    dispatch({
      type: 'NEW_TITLE',
      payload: e.target.value
    })
  },
  setNewDate (e) {
    dispatch({
      type: 'NEW_DATE',
      payload: e.target.value
    })
  },
  setNewMesage (e) {
    dispatch({
      type: 'NEW_MESSAGE',
      payload: e.target.value
    })
  },
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
)(Header)
