import React, { Component } from 'react';
import DeleteArtist from './DeleteArtist'

class ArtistShort extends Component {

    render() {
        // console.log('Inside Short: ', this.props.artist)
        return (
            <div key={this.props.artist._id}>
                <div>{this.props.artist.name}</div>
                <img src={this.props.artist.image} width="100" alt="Not Found"/>
                <DeleteArtist data={this.props.artist._id}/>
            </div>
        );
    }
}

export default ArtistShort;
