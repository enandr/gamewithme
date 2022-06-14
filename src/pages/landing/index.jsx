import React from 'react';
import './landing.css';

const LandingPage = () => {
    return (
        <div className={'page-layout'}>
            <h1 className={'landing-title'}>
                <span className={'landing-blue'}>game</span>
                <span className={'landing-orange'}>with</span>
                <span className={'landing-blue'}>me</span>
            </h1>
            <h3 className={'landing-slogan'}>Game With Your Favorite Streamers</h3>
            <div className={'landing-body'}>
                <p>
                    Do you want to game with your favorite streamers?
                    <span className={'landing-blue'}> Game </span>
                    <span className={'landing-orange'}>With </span>
                    <span className={'landing-blue'}>Me </span>
                    lets you play games with your favorite streamers.
                    Watch their stream, Find your favorite streamer, join their waitlist, and wait to be chosen.
                </p>
            </div>

        </div>

    )
}
export default LandingPage;
