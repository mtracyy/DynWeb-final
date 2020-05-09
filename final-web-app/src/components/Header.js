import React from 'react';

function Header({LogoutFunction, isLoggedIn}) {
    return (
        <header className="Header">
            <div className="Header_wrapper">
                <div className="Header_logo">Logo</div>
                <nav className="Header_nav">
                    {isLoggedIn && <a href="/">Profile</a>}
                    {!isLoggedIn && <a href="/create-account">Sign Up</a>}
                    {!isLoggedIn && <a href="/login">Login</a>}
                    {isLoggedIn && (<a href="" onClick={() => LogoutFunction()}>Logout</a>)}
                </nav>
            </div>
        </header>
    );
}

export default Header;