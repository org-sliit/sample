import React, { Component } from "react";
import cinnamon from "./1401349_17032017420051637510.jpg";
import Jetwing from "./jetwing.jpg";
import Hilton from "./Hilton.jpg";
import clubPalm from "./club palm.jpg";

export default class Hotels extends Component {
    render() {
        return (
            <div>

                <table>

                    <td align="left">
                        <h2>Choose your accomodations as your wish....</h2>

                        <h4>CINNAMON</h4>
                        <tr>
                            <p align="left">
                                Cinnamon grand is the largest five-star hotel on the island,
                                <p>housing 501 rooms, </p>
                                <p>14 restaurants, </p>
                                <p>10 meeting and event spaces,</p>
                                <p>multiple outdoor venues designed for the best city moments to happen right at our doorstep.</p>
                                <p>
                                    The hotel brings together a curated city experience from fine dining to seafood markets,</p> <p>
                                old English pubs to a Shisha lounge and Sri Lankan village the epitome of exquisite living;</p>
                                <p> creating an eclectic mix for diverse tastes.
                                    Their rooms are many, and varied to suit the needs, moods and tastes of every visitor.</p>

                            </p>
                            <p align="left">
                                <p> Be it business, pleasure or a mix of both, the Cinnamon Grand stay is a great way to find relaxation, </p> <p>

                                inspiration and spontaneity combined for the best Colombo experience. </p>
                                <p>
                                    Our 501 eco-friendly rooms come with a unique urban atmosphere, combining the Presidential, Penthouse,
                                    Apartment, Executive, Premium and Courtyard Suites, together with Deluxe,<p> Premium and Executive level rooms, each offering distinct experiences.
                                </p></p>
                            </p>
                        </tr>

                        <td><img src={cinnamon} width={800} height={400}/> </td>

                    </td>

                    <table>

                        <td align="right">
                            <h4>CLUB PALM BAY</h4>
                            <tr>
                                <p>Club Palm Bay Hotel Marawila is one of the most popular luxury Sri Lanka hotels
                                    in the north western coast of Sri Lanka. The luxury beach hotel located at the
                                    fishing village of Marawila north of Bandaranayke International airport is an
                                    ideal option for those tourists who wished to stay away from the hustle and bustle
                                    of beach resorts at Negambo. A short and narrow path from the hotel leads to the wide
                                    beach. The lagoon surrounding the hotel on three sides and the bird sanctuary in immediate
                                    vicinity has setup the luxury Sri Lanka Hotel with an ecologically rich environment.
                                </p>
                            </tr>
                            <td><img src={clubPalm} /></td>

                        </td>
                    </table>


                    <table>

                        <td align="right">
                            <h4>JETWING</h4>
                            <tr>
                                <p>
                                    Situated along the captivating golden sandy shores
                                    of Negombo, Jetwing Blue offers its guests delightful
                                    experiences together with luxury accommodation,
                                    boasting the only 5 Star classification in the area.
                                    Located in the Negombo city, on a pristine stretch
                                    of beach, Jetwing Blue encapsulates the splendor
                                    of this exotic town while exploring its tantalizing
                                    seafood.
                                </p>
                            </tr>

                            <td><img src={Jetwing}/></td>

                        </td>

                    </table>



                    <table>

                        <td align="right">

                            <h4>Hilton</h4>
                            <tr>
                                <p>
                                    Forty-five minutes from Bandaranaike International Airport, our Colombo hotel offers
                                    business travelers both comfort and convenience. Directly connected to Colombo World
                                    Trade Centre, Hilton Colombo offers 25 on-site venues for business and social functions,
                                    including a pillarless ballroom.
                                </p>
                            </tr>

                            <td> <img src={Hilton}/></td>
                        </td>

                    </table>
                </table>
            </div>
        );
    }
}
