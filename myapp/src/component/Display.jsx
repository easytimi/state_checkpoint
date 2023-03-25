import React from'react';
import './Style.css'

const Display = ({profile}) =>{
    return(
        <div className="container">
            <div className={profile.show===false?"kip":"box"}>
                <div >{profile.imgSrc}</div>
                <h1>{profile.fullName} </h1>
                <h1>{profile.bio}</h1>
                <h2>{profile.proFession}</h2>
            </div>
        </div>
    )
}
export default Display;