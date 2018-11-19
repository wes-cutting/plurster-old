import React, { Component, Fragment } from 'react'
import './artists.css'
import Example from './test'

/* 
{ 'name': '', dob: '', 'genre': [], 'type': [], 'image': '' }
*/
export default class extends Component {
    state = {
        name: '',
        dob: '',
        genre: [ 'Rock', 'Pop' ],
        type: [ '' ],
        image: '' 
    }

    handleGenreChange = (idx) => (evt) => {
        const newGenre = this.state.genre.map((genre, _idx) => {
            if (idx !== _idx) return genre;
            
            return evt.target.value;
        });

        this.setState({ genre: newGenre });
    }

    handleSubmit = (evt) => {
        evt.preventDefault()
        console.log(this.state)
        // const { name, shareholders } = this.state;
        // alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
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

    render () {
        return (
            <Fragment>
                <form className="flexy" onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Name"/>     
                    <input type="text" placeholder="Date of Birth"/>     
                    {this.state.genre.map((genre, idx) => (
                        <div className="genre">
                            <input
                                type="text"
                                placeholder={`Genre #${idx + 1} name`}
                                value={genre}
                                onChange={this.handleGenreChange(idx)}
                            />
                            <button type="button" onClick={this.handleRemoveGenre(idx)} className="small">-</button>
                        </div>
                    ))}
                    <button type="button" onClick={this.handleAddGenre} className="small">Add Genre</button>  
                    <input type="text" placeholder="Type"/>     
                    <input type="text" placeholder="Image URL"/> 
                    <button>Add Artist</button>   
                </form>
                <Example/>
            </Fragment>
        )
    }
}