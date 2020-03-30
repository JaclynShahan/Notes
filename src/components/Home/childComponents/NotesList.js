import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { Collapse, Descriptions, Button, Icon, Modal, Input } from 'antd'
import EditModal from './EditModal'

class NotesList extends Component {
  constructor () {
    super()
    this.state = {}
  }

  onDelete = id => {
    Axios.delete(`/api/deleteNote/${id}`).then(resp => {
      console.log(resp)
      this.props.setNotesList(resp.data)
    })
  }
  onSaveEdit = (id, ttl, dt, msg) => {
    Axios.put(`/api/editNote`, {
      id: id,
      title: ttl,
      date: dt,
      message: msg
    }).then(resp => {
      console.log(resp)
      this.props.setEditModal(false)
      this.props.setNotesList(resp.data)
    })
  }
  openEdit = () => {
    const { note } = this.props
    this.props.setInspected(note)
    this.props.setEditModal(true)
  }
  render () {
    let styles = {
      textAlign: 'left'
    }
    return (
      <div>
        <Collapse>
          <Collapse.Panel header={this.props.title} key={this.props.id}>
            <Descriptions style={styles} column={1}>
              <Descriptions.Item layout='vertical'>
                <header>Date:</header>
                <p>{this.props.date}</p>
              </Descriptions.Item>
              <Descriptions.Item layout='vertical'>
                <header>Note:</header>
                <p>{this.props.message}</p>
              </Descriptions.Item>
            </Descriptions>
          </Collapse.Panel>
        </Collapse>
        <Button onClick={() => this.onDelete(this.props.id)}>Delete</Button>
        <Button onClick={() => this.openEdit()}>Edit</Button>
        <Modal
          okText=''
          title='Edit Note'
          onCancel={() => this.props.setEditModal(false)}
          visible={this.props.main.editModal}
          footer={[]}
        >
          <EditModal onSave={this.onSaveEdit} />
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  console.log('NoteList State:', state)
  return state
}

const mapDispatchToProps = dispatch => ({
  setNotesList (arr) {
    dispatch({
      type: 'NOTES_LIST',
      payload: arr
    })
  },
  setEditModal (val) {
    dispatch({
      type: 'EDIT_MODAL',
      payload: val
    })
  },
  setInspected (note) {
    dispatch({
      type: 'SET_EDIT_NOTE',
      payload: note
    })
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotesList)
