import React, { Component } from 'react'
import ReactModal from 'react-modal'

const modalStyle = {
    'overlay': {
        'backgroundColor': 'rgba(121,158,178, 0.75)'
    },
    'content': {
        top: '15vh',
        left: '15vw',
        right: '15vw',
        bottom: '15vh',
    }
}

const contentStyle = {
    'textAlign': 'center'
}

export default class extends Component {
    state = {
        showModal: false
    };

    handleOpenModal = () => {
        this.setState({ showModal: true });
    }

    handleCloseModal = () => {
        this.setState({ showModal: false });
    }

    render() {
        const children = React.Children.map(this.props.children, child => {
            return React.cloneElement(child, {
                closeModal: () => this.setState({ showModal: false })
            })
        })
        return (
            <div>
                <button onClick={this.handleOpenModal}>{this.props.btnText}</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Dynamic Modal"
                    style={modalStyle}
                >
                    <div style={contentStyle}>
                        <h2>{this.props.title}</h2>
                        {children}
                        <button onClick={this.handleCloseModal}>Close</button>
                    </div>
                </ReactModal>
            </div>
        );
    }
}