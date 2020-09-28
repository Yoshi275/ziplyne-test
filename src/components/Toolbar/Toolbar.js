import React from 'react';
import './Toolbar.css';
import logo from '../../assets/With Drop Shadow.png'
import diamond from '../../assets/Diamond.png'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>

            </div>
            <div className="toolbar_logo">
                {/* <a href="/">THE LOGO</a> */}
                <img src={logo} alt="Ziplyne Logo" style={{height: '56px'}}/>
            </div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Product</a></li>
                    <li><a href="/">Solution</a></li>
                    <li><a href="/">Pricing</a></li>
                    <li><a href="/">Customer Stories</a></li>
                    <li><a href="/">Resources</a></li>
                </ul>
            </div>
            <div className="spacer"></div>
            <div className="toolbar_demo-items">
                <ul>
                    <li><button className="toolbar_demo-items-button">Request a demo</button></li>
                    <li><img src={diamond} style={{height: '56px'}} /></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;