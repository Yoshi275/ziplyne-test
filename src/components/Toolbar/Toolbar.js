import React from 'react';
import './Toolbar.css';
import logo from '../../assets/With Drop Shadow.png'
import { MdExitToApp } from 'react-icons/md'
import { IconContext } from 'react-icons';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_logo">
                <img src={logo} alt="Ziplyne Logo" style={{height: '56px'}}/>
            </div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="https://www.linkedin.com/in/cherylnqj/">Product</a></li>
                    <li><a href="https://www.linkedin.com/in/cherylnqj/">Solution</a></li>
                    <li><a href="https://www.linkedin.com/in/cherylnqj/">Pricing</a></li>
                    <li><a href="https://www.linkedin.com/in/cherylnqj/">Customer Stories</a></li>
                    <li><a href="https://www.linkedin.com/in/cherylnqj/">Resources</a></li>
                </ul>
            </div>
            <div className="spacer"></div>
            <div className="toolbar_demo-items">
                <ul>
                    <li><button className="toolbar_demo-items-button">Request a demo</button></li>
                    <li>
                        <IconContext.Provider value={{style: {fontSize: '30px', color: "grey"}}}>
                            <div>
                                <MdExitToApp />
                            </div>
                        </IconContext.Provider>
                    </li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;