import React, {Component} from 'react'
import Axios from 'axios'
import {connect} from 'react-redux'
import Header from './childComponents/Header.js'
import NotesList from './childComponents/NotesList.js'

class Home extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    render() {
        console.log(this.props)
        return(
            <div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log("Home State:", state)
    return state
}

const mapDispatchToProps = dispatch => ({
    setNotesList(arr) {
        dispatch({
            type: "NOTES_LIST",
            payload: arr
        })
    }
})
export default connect (mapStateToProps, mapDispatchToProps)(Home)