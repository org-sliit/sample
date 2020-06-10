import React, {Component} from 'react';
import photo1 from './nine-arch-bridge-sri-lanka-train-1024x678.jpg'
import photo from './travel-sri-lanka-discover-the-charms-of-sri-lanka.jpg'


export default class Welcome extends Component {
    render() {
        return(
            <div>
                <div className="notes_wrapper">
                    <h2>Welcome to Sri Lanka</h2> <br/>
                    <p align="middle">Endless beaches, timeless ruins, welcoming people, oodles of elephants, rolling surf, cheap prices, fun trains, famous tea and flavourful food make Sri Lanka irresistible.</p>
                    <div className="welcome_div">
                        <img src= {photo} align="middle" width={1200} height={600}/>
                    </div>
                    <br/>
                    <br/>
                    <h3>The Undiscovered Country</h3>
                    <p align="middle">You might say Sri Lanka has been hiding in plain sight. Scores of travellers have passed overhead on their way to someplace else, but years of uncertainty kept Sri Lanka off many itineraries.Now, however, all that has changed. The country is moving forward quickly as more and more people discover its myriad charms. Lying between the more trodden parts of India and Southeast Asia, Sri Lanka's history, culture and natural beauty are undeniably alluring. It's the place you haven't been to yet, that you should.</p>
                    <div className="welcome_div">
                        <img src= {photo1} align="middle" width={1200} height={600}/>
                    </div>
                </div>

                {/*<div className="github-stats">
                    <iframe src="https://ghbtns.com/github-btn.html?user=yTakkar&type=follow&count=false&size=large"
                            frameBorder="0" scrolling="0" width="180px" height="30px"></iframe>
                    <iframe
                        src="https://ghbtns.com/github-btn.html?user=yTakkar&repo=React-Instagram-Clone-2.0&type=fork&count=true&size=large"
                        frameBorder="0" scrolling="0" width="125px" height="30px"></iframe>
                    <iframe
                        src="https://ghbtns.com/github-btn.html?user=yTakkar&repo=React-Instagram-Clone-2.0&type=star&count=true&size=large"
                        frameBorder="0" scrolling="0" width="160px" height="30px"></iframe>
                </div>*/}
            </div>
        )
    }
}
