import React, { Component } from 'react';

class ArtistShort extends Component {

    render() {
        console.log('Inside Short: ', this.props.artist)
        return (
            <div key={this.props.artist.id}>
                {this.props.artist.name}
            </div>
        );
    }
}

export default ArtistShort;
