import React, { Component } from 'react';
import Layout from '../config/Layout'
import Artists from '../components/artists'
import Test from '../config/Modal'

class Home extends Component {
    state = {
        artists: [],
        search: ''
    }
    grabArtists = async () => {
        await fetch('http://localhost:4000/artists')
            .then(res => res.json())
            .then(data => this.setState({artists: data}))
        console.log('all results: ', this.state.artists)
    }
    search = async (event) => {
        event.preventDefault()
        // console.log("Search: ", this.state.search)
        await fetch('http://localhost:4000/artists/name/' + this.state.search)
            .then(res => res.json())
            .then(data => this.setState({ artists: data }))
        // console.log('search results: ', this.state.artists)
    }

    componentDidMount = async () => {
        await this.grabArtists()
    }
    render() {
        // console.log("Home Rendering")
        return (
            <Layout>
                <form onSubmit={this.search}>
                    <input type="text" onChange={event => this.setState({search: event.target.value})}/>
                    <input type="submit" value="Search"/>
                </form>
                <Test/>
                <Artists data={this.state.artists}/>
            </Layout>
        );
    }
}

export default Home;
