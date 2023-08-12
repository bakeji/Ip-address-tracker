import React from "react";

export default function Result(props){
    return(
        <div className="result">
            {props.showResult?(
                <>
            <div className="ip-ad">
                <p> IP ADDRESS</p>
                <h3>{props.ipAddress}</h3>
            </div>

            <div className="location">
                <p>LOCATION</p>
                <h3>{`${props.city} , ${props.region} ${props.postalCode}`}</h3>
            </div>

            <div className="timezone">
                <p>TIMEZONE</p>
                <h3>{`UTC ${props.timeZone}`}</h3>
            </div>

            <div className="isp">
                <p>ISP</p>
                <h3>{props.isp}</h3>
            </div>
            </>
): (
    <div className="loading-container">
    <div className="loading-spinner"></div>
    </div>
            )}
        </div>
    )
}