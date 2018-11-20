import React, { Component } from 'react';

class DeleteArtist extends Component {

    handleDelete = async (event) => { 
        event.preventDefault()
        const url = `http://localhost:4000/artists/id/${this.props.data}`
        console.log(url)
        await fetch(url, { method: 'DELETE' })
            .then(res => res.json())
            .then(response => console.log('Success:', JSON.stringify(response)))
            .catch(error => console.error('Error:', error));
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
