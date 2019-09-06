import React, { Component } from 'react';
import Layout from '../config/Layout'
import Artists from '../components/artists'
import ArtistForm from '../components/artists/ArtistForm'
import Modal from '../config/Modal'
import { url } from '../config/coms'
class Home extends Component {
    state = {
        artists: [],
        search: ''
    }
    grabArtists = async () => {
        await fetch(`${url}/artists`)
            .then(res => res.json())
            .then(data => this.setState({artists: data}))
        console.log('all artists: ', this.state.artists)
    }
    search = async (event) => {
        event.preventDefault()
        // console.log("Search: ", this.state.search)
        if(this.state.search === ''){
            this.grabArtists()
        } else {
            await fetch(`${url}/artists/name/${ this.state.search}`)
                .then(res => res.json())
                .then(info => this.setState({ artists: info }))
        }
        // console.log('search results: ', this.state.artists)
    }

    componentDidMount = async () => {
        await this.grabArtists()
    }
    render() {
        // console.log("Home Rendering")
        const createText = "Create Artist"
        return (
            <Layout>
                <form onSubmit={this.search}>
                    <input 
                        type="text" 
                        onChange={event => this.setState({search: event.target.value})}
                    />
                    <input type="submit" value="Search"/>
                </form>
                <Modal btnText={createText} title={createText}>
                    <ArtistForm 
                        btnText={createText} 
                        action="POST"
                        refresher={this.grabArtists}
                    />
                </Modal>
                <Artists data={this.state.artists} refresher={this.grabArtists}/>
            </Layout>
        );
    }
}

export default Home;
