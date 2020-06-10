import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class Guide extends Component {
    render() {
        return (
            <div>

                <form className="navbar-form navbar-left" role="search">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search Guides" align="right"/>
                        <button type="submit" className="btn btn-default" align="right">Search</button>
                    </div>
                </form>
                <br/>
                <h3>Suggestions</h3>
                <br/>
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link">Guide 1</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link">Guide 2</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link">Guide 3</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link">Travel Agency 1</Link>
                    </li>
                    <li className="nav-item">
                        <Link to={'/'} className="nav-link">Travel Agency 2</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
