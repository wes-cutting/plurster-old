import React, { Component } from 'react';
import { artistAPI } from '../../config/coms'

class DeleteArtist extends Component {

    handleDelete = async (event) => { 
        event.preventDefault()
        const path = `/id/${this.props.data}`
        // console.log(path)
        await artistAPI({}, 'DELETE', path).then(() => {
            if (this.props.refresher) {
                this.props.refresher()
            }
        })
    }
    render() {
        return (
            <form onSubmit={this.handleDelete}>
                <button>Delete</button>
            </form>
        );
    }
}

export default DeleteArtist;
