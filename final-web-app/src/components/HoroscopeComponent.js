import React from "react";

function HoroscopeComponent() {
    return (
        <div className="chooseSign">
                <h2>Today's horoscope: </h2>
                <div className="SignOptions">
                    <a href="/profile/?sign=aries">Aries</a>
                    <a href="/profile/?sign=taurus">Taurus</a>
                    <a href="/profile/?sign=gemini">Gemini</a>
                    <a href="/profile/?sign=cancer">Cancer</a>
                    <a href="/profile/?sign=leo">Leo</a>
                    <a href="/profile/?sign=virgo">Virgo</a>
                    <a href="/profile/?sign=libra">Libra</a>
                    <a href="/profile/?sign=scorpio">Scorpio</a>
                    <a href="/profile/?sign=sagittarius">Sagittarius</a>
                    <a href="/profile/?sign=capricorn">Capricorn</a>
                    <a href="/profile/?sign=aquarius">Aquarius</a>
                    <a href="/profile/?sign=pisces">Pisces</a>
                </div>
        </div>
    );
}

export default HoroscopeComponent;