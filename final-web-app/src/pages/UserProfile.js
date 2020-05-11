import React, {useEffect, useState} from "react";
import axios from 'axios';
import HoroscopeComponent from '../components/HoroscopeComponent';
import { useHistory } from 'react-router-dom';


function UserProfile({userInfo}) {
    const email = userInfo.email;
    const uid = userInfo.uid;
    const username = userInfo.displayName;
    const [userSign, setUserSign] = useState('');
    const [horoscopeData, setHoroscopeData] = useState('');
    const [userHoroscope, setUserHoroscope] = useState('');
    let history = useHistory();

    useEffect(() => {
        let searchParams = history.location.search;
        let urlParams = new URLSearchParams(searchParams);
        let userSign = urlParams.get("sign");
        if(userSign) {
           setUserSign(userSign.charAt(0).toUpperCase() + userSign.slice(1));
        }
    }, [history]);

    useEffect(() => {
        if (userSign !== '') {
            axios.get(`https://horoscopes-and-astrology.com/json`)
                .then(function (response) {
                    // handle success
                    setHoroscopeData(response.data);
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                });
        }
    }, [userSign]);

    useEffect(() => {
        console.log("userSign", userSign);
        if (horoscopeData.dailyhoroscope) {
            let cutoffIndex = horoscopeData.dailyhoroscope[userSign].indexOf("<");
            setUserHoroscope(horoscopeData.dailyhoroscope[userSign].substring(0, cutoffIndex - 1));
        }
    }, [horoscopeData]);

    useEffect(() => {
        console.log("userHoroscope updated", userHoroscope);
    }, [userHoroscope]);


    return (
        <div className="Profile_wrapper">
            <h1>Profile</h1>
            <div className="ProfileContent_wrapper">
                <div className="ProfileCard">
                    <p>{username}</p>
                    <p className="email">{email}</p>
                </div>
                <div className="HoroscopeCard">
                    <HoroscopeComponent/>
                    <p>{userHoroscope}</p>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;