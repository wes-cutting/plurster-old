import React, { Component } from 'react';
import Layout from '../config/Layout'
import Artists from '../components/artists'

class Home extends Component {
    state = {
        artists: []
    }
    grabArtists = async () => {
        await fetch('http://localhost:4000/artists')
            .then(res => res.json())
            .then(data => this.setState({artists: data}))
        console.log('results: ', this.state.artists)
    }
    componentDidMount = async () => {
        await this.grabArtists()
    }
    render() {
        console.log("Home Rendering")
        return (
            <Layout>
                <Artists data={this.state.artists}/>
            </Layout>
        );
    }
}

export default Home;
