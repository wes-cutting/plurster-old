import React, { Component } from 'react';

class ArtistShort extends Component {

    render() {
        // console.log('Inside Short: ', this.props.artist)
        return (
            <div key={this.props.artist.id}>
                <div>{this.props.artist.name}</div>
                <img src={this.props.artist.image} width="100" alt="Not Found"/>
            </div>
        );
    }
}

export default ArtistShort;
