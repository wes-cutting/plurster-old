import React, { Component } from 'react';
import './layout.css'

class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <h1>Welcome to my Concert App</h1>
                <div>{this.props.children}</div>
                <div className="footer">Thanks for stopping by!</div>
            </div>
        );
    }
}

export default Layout;
