import React from 'react';

function Header({LogoutFunction, isLoggedIn}) {
    return (
        <header className="Header">
            <div className="Header_wrapper">
                <a href="/" className="Header_logo">AstrologyMemes</a>
                <nav className="Header_nav">
                    {isLoggedIn && <a href="/">Home</a>}
                    {isLoggedIn && <a href="/profile">Profile</a>}
                    {!isLoggedIn && <a href="/create-account">Sign Up</a>}
                    {!isLoggedIn && <a href="/login">Login</a>}
                    {isLoggedIn && (<a href="" onClick={() => LogoutFunction()}>Logout</a>)}
                </nav>
            </div>
        </header>
    );
}

export default Header;