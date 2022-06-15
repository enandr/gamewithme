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
            <h3 className={'landing-slogan'}>Game With Your Favorite People</h3>
            <div className={'landing-body'}>
                <div>
                    <p>
                        Are you playing games in a large group? Are you a streamer who wants to play games with your fans? Are you looking for an easy way
                        to manage the players?
                    </p>
                    <p style={{textAlign:'center'}}>
                        <span className={'landing-blue'}>Game </span>
                        <span className={'landing-orange'}>With </span>
                        <span className={'landing-blue'}>Me </span>
                        is perfect for you!
                    </p>
                    <p>You can easily manage your players, create a waitlist, and bring in only the gamers you want to play with. This also can protect
                        your game from unwanted users by having the ability to hide the room code or password so only the people
                        who you want to join, can join.</p>
                </div>
                <div className={'placeholder'}>

                </div>

            </div>

        </div>

    )
}
export default LandingPage;
