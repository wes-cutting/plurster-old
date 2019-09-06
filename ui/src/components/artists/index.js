import React, { Component } from 'react';
import ArtistShort from './ArtistShort'

class Artists extends Component {

    render() {
        // console.log('Inside Artists: ', this.props.data)
        const artists = this.props.data.map(artist => 
            <ArtistShort 
                artist={artist} 
                refresher={this.props.refresher}/>
        )
        return (
            <div className="flex-row">
                {artists}
            </div>
        );
    }
}

export default Artists;
