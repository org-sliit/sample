import React, { Component } from "react";

import yala from "./yala1.png";
import wil from "./wilpathu.jfif";
import sinharaja from "./Sinharaja.png"

export default class WildMain extends Component{
    render() {
        return(
            <div>

                <h1 align="center">Wild Life</h1>
                <br/>
                <br/>
                <table>

                    <tr>

                        <td><img src = {yala}width="500px" height="500px"/></td>
                        <td align="right">
                            <h3><b>Yala</b></h3>
                            <p>Yala National Park is a huge area of forest, grassland and lagoons bordering the Indian Ocean, in southeast Sri Lanka. </p>
                            <p>
                                Itâ€™s home to wildlife such as leopards, elephants and crocodiles, as well as hundreds of bird species.</p>
                            <p>Inland, Sithulpawwa is an ancient Buddhist monastery. Nearby caves contain centuries-old rock paintings.</p>
                            <p>Southwest, Magul Maha Viharaya also has ancient Buddhist ruins. Both are pilgrimage sites.</p>
                            <p>Address: Hambantota</p>
                            <p>Area: 978.8 kmÂ²</p>
                            <p>Hours:</p>
                            <p>Open â‹… Closes 6PM</p>
                            <p>Established: 1900</p>

                        </td>

                    </tr>

                    <tr>

                        <td><img src = {wil}width="500px" height="500px"/></td>
                        <td align="right">
                            <h3><b>Wilpaththu</b></h3>
                            <p>The unique feature of this park is the existence of "Willus" - Natural, sand-rimmed water basins or depressions that fill with rainwater.</p>
                            <p>Located in the Northwest coast lowland dry zone of Sri Lanka.</p>
                            <p>Area: 1,317 kmÂ²</p>
                            <p>Open â‹… Closes 6PM</p>
                            <p>Designated as world heritage site: February 2, 2013</p>
                            <p>Phone: 0112 199 323</p>
                        </td>
                    </tr>

                    <tr>
                        <td><img src = {sinharaja}width="500px" height="500px"/></td>
                        <td align="right">

                            <h3><b>Sinharaja RainForest</b></h3>
                            <p>Sinharaja Forest Reserve is a national park and a biodiversity hotspot in Sri Lanka.</p>
                            <p>It is of international significance and has been designated a Biosphere Reserve and World Heritage Site by UNESCO.</p>
                            <p>Area: 88.64 kmÂ²</p>
                            <p>Hours: Full Time</p>
                            <p>Established: April 1978</p>
                            <p>Phone: 071 071 4444</p>
                        </td>
                    </tr>
                </table>
            </div>


        )
    }
}
