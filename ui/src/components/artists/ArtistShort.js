import React, { Component } from 'react';
import Modal from '../../config/Modal'
import ArtistForm from './ArtistForm'
import DeleteArtist from './DeleteArtist'

class ArtistShort extends Component {

    render() {
        // console.log('Inside Short: ', this.props.artist)
        const artist = this.props.artist
        const updateText = "Update Artist"
        const path = `/${artist._id}` 
        return (
            <div key={artist._id} className="card">
                <div>{artist.name}</div>
                <img src={artist.image} width="100" alt="Not Found"/>
                <div>
                    <Modal btnText="Update" title={updateText}>
                        <ArtistForm 
                            artist={artist} 
                            btnText={updateText}
                            action="PUT"
                            path={path}
                            refresher={this.props.refresher} 
                        />
                    </Modal>
                    <DeleteArtist data={artist._id}/>
                </div>
                          
            </div>
        );
    }
}

export default ArtistShort;
