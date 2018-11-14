import React, { Component } from 'react';
import './layout.css'

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <h1>Welcome to my Concert App</h1>
                {this.props.children}
                <h5>Thanks for stopping by!</h5>
            </div>
        );
    }
}

export default Layout;
