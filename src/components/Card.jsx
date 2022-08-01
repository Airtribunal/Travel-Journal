import React from 'react';

const Card = (props) => {
    return (
        <div className="card container">
            <img src={props.card.imageUrl} alt="" className="card-img" />
            <div className="card-info">
                <div className="card-location">
                    <img src="/images/location.png" alt="" className="location-icon" />
                    <h3 className="location">{props.card.location}</h3>
                    <a className="card-link" href={props.card.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h1 className="card-title">{props.card.title}</h1>
                <div className="card-date">{props.card.date}</div>
                <p className="card-desctiption">{props.card.description}</p>
            </div>
        </div>
    );
}

export default Card;
