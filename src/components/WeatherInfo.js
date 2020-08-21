import React from 'react';

const WeatherInfo = (props) => {
    return(
        <div className='ui segment'>
            <div className="ui center aligned header">
                <h2>{props.city}</h2>
                <h1>{props.temp}</h1>
                <img src={props.iconURL} style={{width:'auto'}} alt=''/>
                <h2>{props.description}</h2>
            </div>
        </div>
    )
}

export default WeatherInfo;