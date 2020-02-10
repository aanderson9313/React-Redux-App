import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const BeersList = props => {

    return (
        <>
            {props.error ? <div className = "error">{props.error}</div> : props.beers.map(beers => (
                <div className = "attributes">
                    <div className = "beer-title">Name: </div>
                    <div>{beers.name}</div>
                    <img className="img" src={beers.image_url} width="10%" height="10%"/>
                    <div className = "beer-title">Tagline: </div>
                    <div>{beers.tagline}</div>
                    <div className = "beer-title">Date-brewed: </div>
                    <div>{beers.first_brewed}</div>
                    <div className = "beer-title">Description: </div>
                    <div>{beers.description}</div>
                    <div className = "beer-title">ABV: </div>
                    <div>{beers.abv}</div>
                    <div className = "beer-title">IBU: </div>
                    <div>{beers.ibu}</div>
                    <div className = "beer-title">Popular food pairings: </div>
                    <div>{beers.food_pairing}</div>
                    
                </div>
            ))}
        </>
    );
};

const mapStateToProps = state => {
    return {
        beers: state.beers,
        error: state.error
    };
};

export default connect( mapStateToProps, {}) (BeersList);