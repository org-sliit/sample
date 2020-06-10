import React, { Component } from "react";
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';

import peradeniya from "./pera.jpg";
import hakgala from "./hakgala.jpg";
import gampaha from "./gampaha.jpg";

import Ancient from './ancientplaces.component';
import Wild from './wildlife.component';



export default class Places extends Component {
    render() {
        return (
            <Router>
            <div>

                <table>

                    <td align="left">
                        <h2>Botanical Gardens in Sri Lanka</h2>

                        <h4>Peradeniya</h4>
                        <tr>
                            <p>the many Beautiful avenues will lead one to sections which provide a burst of tropical color.
                                The great lawns highlight huge tropical trees. Then, while you will be surprised at the variety
                                of bamboo that can be found in one place.
                                Actually, the best Know Attraction of the garden is the Orchid House, Which has more than 300
                                varieties of exquisite Orchids from the rare indigenous foxtail and Vesak Orchids to many natural
                                and hybrid species which have made this one of the best knows of the world. The Spice garden gives
                                you a first-hand introduction to the trees, Plants, and flowers.
                                While the Peradeniya Botanical Garden may receive more attention for its Orchid house is located.
                                Peradeniya Botanical garden famous for Flowers. Indeed, all around the world foreigners and local
                                visitors mostly like to that. This is one of the oldest botanic gardens in the country.
                            </p>
                        </tr>

                        <td><img src={peradeniya} width={800} height={500}/> </td>

                        <br/>
                        <br/>

                        <Link to={'/ancientplaces'} className="nav-link">Ancient Places</Link>
                        <Link to={'/wildlife'} className="nav-link">Wildlife</Link>

                    </td>

                    <table>

                        <td align="right">
                            <h4>Hakgala</h4>
                            <tr>
                                <p>
                                    Hakgala Botanical Garden is situated on the Nuwara Eliya-Badulla main road,
                                    16 km from Nuwara Eliya. The garden has a cool temperate climate because of
                                    altitude is 5,400 feet above the sea level. The mean annual temperature ranges
                                    between 16 Â°C to 30 Â°C during course of a year.[3] From December to February it
                                    has a cold climate, while the warm climate persists from April to August.
                                </p>
                            </tr>
                            <td><img src={hakgala} width={500} height={300}/></td>

                        </td>
                    </table>


                    <table >

                        <td align="right">
                            <h4>Gampaha Botanical Garden</h4>
                            <tr>
                                <p>
                                    Gampaha Botanical Garden, also known as Henarathgoda Botanical Garden is situated in the suburb of Gampaha.
                                    It was established in 1876 by the British to conduct experiments on exotic economic plants such as Rubber,
                                    and explore plant wealth and development of economy in the colony. The first imported rubber tree to Sri Lanka
                                    was first planted in this garden and it was the first seedlings of Brazilian rubber tree ever planted in Asia.
                                </p>
                            </tr>

                            <td><img src={gampaha} width={500} height={300}/></td>

                        </td>

                    </table>
                </table>
                <Switch>
                    <Route exact path = '/ancientplaces' component = {Ancient}/>
                    <Route exact path = '/wildlife' component = {Wild}/>
                </Switch>
            </div>
            </Router>
        );
    }
}
