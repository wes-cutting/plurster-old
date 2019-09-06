import React, { Component } from 'react';
import './layout.css'

class Layout extends Component {
    render() {
        return (
            <div className="site">
                <div className="centered content">
                    <header className="theme">PLURSTER</header>
                    <div>{this.props.children}</div>
                </div>
                <footer className="centered theme">Thanks for stopping by!</footer>
            </div>
        );
    }
}

export default Layout;
