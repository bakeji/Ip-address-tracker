import React from "react";

export default function Search(props){
    return(
    <div className="search">
        <div className="title">
            <h1>IP Address Tracker</h1>
        </div>

        <div className="search-input">
            <input type="text"
                id="search"
                onChange={props.handleChange}
                placeholder="Search for any IP address or domain"
             />
            <button
            onClick={props.showData}><img src="images/icon-arrow.svg" alt="arrow" /></button>
        </div>
    </div>
    )

}