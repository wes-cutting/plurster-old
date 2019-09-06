import React, { Component, Fragment } from 'react'
import { artistAPI } from '../../config/coms'

/* 
{ 'name': '', 'dob': '', 'genre': [], 'type': [], 'image': '' }
*/
export default class extends Component {
    constructor(props) {
        super(props)
        let artist;
        if (props.artist) {
            artist = props.artist
        } else {
            artist = { 'name': '', 'dob': '', 'genre': [], 'type': [], 'image': '' }
        }
        this.state = {
            name: artist.name,
            dob: artist.dob,
            genre: artist.genre,
            type: artist.type,
            image: artist.image
        }
    }

    handleGenreChange = (idx) => (evt) => {
        const newGenre = this.state.genre.map((genre, _idx) => {
            if (idx !== _idx) return genre;
            
            return evt.target.value;
        });

        this.setState({ genre: newGenre });
    }

    handleAddGenre = () => {
        this.setState({
            genre: this.state.genre.concat([ '' ])
        });
    } 

    handleRemoveGenre = (idx) => () => {
        this.setState({
            genre: this.state.genre.filter((s, _idx) => idx !== _idx)
        });
    }

    handleTypeChange = (idx) => (evt) => {
        const newType = this.state.type.map((type, _idx) => {
            if (idx !== _idx) return type;

            return evt.target.value;
        });

        this.setState({ type: newType });
    }

    handleAddType = () => {
        this.setState({
            type: this.state.type.concat([''])
        });
    }

    handleRemoveType = (idx) => () => {
        this.setState({
            type: this.state.type.filter((s, _idx) => idx !== _idx)
        });
    }

    handleSubmit = (evt) => {
        // evt.preventDefault()
        // console.log(this.state)
        let path = this.props.path
        if(!path){
            path = ''
        }   
        artistAPI(this.state, this.props.action, path)
    }

    render () {
        return (
            <Fragment>
                <form className="flex-col form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="Name"
                        value={this.state.name} 
                        onChange={event => this.setState({ name: event.target.value })}
                    />     
                    <input 
                        type="text" 
                        placeholder="Date of Birth: YYYY.MM.DD"
                        value={this.state.dob} 
                        onChange={event => this.setState({ dob: event.target.value })}
                    />     
                    {this.state.genre.map((genre, idx) => (
                        <span className="genre" key={idx * 20}>
                            <input
                                type="text"
                                placeholder={`Genre #${idx + 1} name`}
                                value={genre}
                                onChange={this.handleGenreChange(idx)}
                            />
                            <button type="button" onClick={this.handleRemoveGenre(idx)} className="small">-</button>
                        </span>
                    ))}
                    <button type="button" onClick={this.handleAddGenre} className="small">Add Genre</button>  
                    {this.state.type.map((type, idx) => (
                        <span className="type" key={idx * 10}>
                            <input
                                type="text"
                                placeholder={`Type #${idx + 1} name`}
                                value={type}
                                onChange={this.handleTypeChange(idx)}
                            />
                            <button type="button" onClick={this.handleRemoveType(idx)} className="small">-</button>
                        </span>
                    ))}
                    <button type="button" onClick={this.handleAddType} className="small">Add Type</button>      
                    <input 
                        type="text" 
                        placeholder="Image URL" 
                        value={this.state.image}
                        onChange={event => this.setState({ image: event.target.value })}
                    /> 
                    <button>{this.props.btnText}</button>   
                </form>
            </Fragment>
        )
    }
}