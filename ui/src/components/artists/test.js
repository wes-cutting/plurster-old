import React from 'react'

export default class extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            shareholders: [{ name: '' }],
        };
    }

    handleShareholderNameChange = (idx) => (evt) => {
        const newShareholders = this.state.shareholders.map((shareholder, _idx) => {
            if (idx !== _idx) return shareholder;
            return { ...shareholder, name: evt.target.value };
        });

        this.setState({ shareholders: newShareholders });
    }

    handleSubmit = (evt) => {
        const { name, shareholders } = this.state;
        alert(`Incorporated: ${name} with ${shareholders.length} shareholders`);
    }

    handleAddShareholder = () => {
        this.setState({
            shareholders: this.state.shareholders.concat([{ name: '' }])
        });
    }

    handleRemoveShareholder = (idx) => () => {
        this.setState({
            shareholders: this.state.shareholders.filter((s, _idx) => idx !== _idx)
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Shareholders</h4>

                {this.state.shareholders.map((shareholder, idx) => (
                    <div className="shareholder">
                        <input
                            type="text"
                            placeholder={`Shareholder #${idx + 1} name`}
                            value={shareholder.name}
                            onChange={this.handleShareholderNameChange(idx)}
                        />
                        <button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">-</button>
                    </div>
                ))}
                <button type="button" onClick={this.handleAddShareholder} className="small">Add Shareholder</button>
                <button>Incorporate</button>
            </form>
        )
    }
}