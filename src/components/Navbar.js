import React from 'react';
import './navbar.css'
function Navbar(props) {
    return (
        <div>
            <div className='navbarContainer'>
                <nav>
                <ul style={{display:'flex'}} className='navbar'>
                    <div className='navBarItems'>
                        <li>Menu</li>
                    </div>
                    <div className='navBarItems searchBar'>
                        <li><input type="text" placeholder='Search'/></li>
                    </div>
                    <div className='navBarItems'>
                        <li>Watch List</li>
                    </div>
                    <div className='navBarItems'>
                        <li>Sign In</li>
                    </div>
                </ul>
                </nav>
            </div>
        </div>
    );
}

export default Navbar;