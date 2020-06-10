import React, { Component } from "react";

import sigiriya from "./sigiriya.png"
import temple from "./temple.png"
import par from "./par.png";


export default class Ancient extends Component{

    render() {
        return(

            <div>

                <h1 align="center">Ancient Places</h1>
                <br/>
                <br/>
                <table>
                    <tr>
                        <td align="right"><img src = {sigiriya}width="500px" height="500px"/></td>
                        <br/>
                        <br/>
                        <td align="right">
                            <h3><b>Sigiriya</b></h3>
                            <p>Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.</p>
                            <p>The name refers to a site of historical and archaeological significance that is dominated by a massive column of rock nearly 200 metres high.</p>
                            <p> Address: Sigiriya</p>
                            <p>Open â‹… Closes 4PM</p>
                            <p>Designated: 1982 (6th session)</p>
                            <p>Designated as world heritage site: 1982 (6th session)</p>
                            <p>UNESCO Region: Asia-Pacific</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="right"><img src = {par}width="500px" height="500px"/></td>
                        <br/>
                        <br/>
                        <td align="right">
                            <h3>Parakrama Samudraya</h3>

                            <p>Parakrama Samudra is a shallow reservoir, consisting of five separate reservoirs connected by narrow channels in Polonnaruwa, Sri Lanka.</p>
                            <p>The northernmost reservoir is the oldest and referred to as Topa wewa built around 386 AD.</p>
                            <p>Area: 22.6 kmÂ²</p>
                            <p>Mean depth: 5 m</p>
                            <p>Average depth: 5 m (16 ft)</p>
                        </td>
                    </tr>

                    <tr>
                        <td align="right"><img src = {temple}width="500px" height="500px"/></td>
                        <br/>
                        <br/>
                        <td align="right"><h3>Temple of the sacred tooth relic</h3>
                            <p>Sri Dalada Maligawa or the Temple of the Sacred Tooth Relic is a Buddhist temple in the city of Kandy, Sri Lanka.</p>
                            <p>It is located in the royal palace complex of the former Kingdom of Kandy, which houses the relic of the tooth of the Buddha.</p>
                            <p>Address: Sri Dalada Veediya, Kandy 20000</p>
                            <p>Opened: 1595</p>
                            <p>Function: Temple</p>
                        </td>
                    </tr>
                </table>

            </div>
        )
    }
}

