import React, { Component } from "react";

import './rendom-planet.css';

import SwapiService from "../../service/swapi-service";
import Spiner from "../spiner/spiner";
import Error from "../error/error";

export default class RendomPlanet extends Component{

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    }

    componentDidMount(){
        this.updatePlanet();
        const {updateInterval} = this.props;
        this.interval = setInterval(this.updatePlanet, updateInterval);
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet, 
            loading: false
        })
    }

    onErrorPlanet = () => {
        this.setState({
            error: true,
            loading: false
        })
    }

    updatePlanet = () => {
        const id = Math.floor(Math.random()*10) + 3;

        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onErrorPlanet)
    }

    render(){

        const { planet, loading, error} = this.state;

        const hasData = !(loading || error);

        const errorIndicator = error ? <Error/> : null;
        const spiner = loading ? <Spiner/> : null;
        const content = hasData ? <ContentView planet={planet} /> : null;

        return(
            <div className="rendom-planet">
                {errorIndicator}
                {spiner}
                {content}
            </div>
        )
    }
}

RendomPlanet.defaultProps = {
    updateInterval: 5000
}


const ContentView = ({planet}) => {

    const {id, population, rotation_period, diameter, name} = planet;

    return(
        <React.Fragment>
            <img className="rendom-planet__img" src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="#" />
            <div className="rendom-planet__box">
                <h3 className="rendom-planet__title">{name}</h3>
                <ul className="rendom-planet__list">
                    <li className="rendom-planet__item">
                        <span>Population </span>
                        <span> {population} </span>
                    </li>
                    <li className="rendom-planet__item">
                        <span>Rotation </span>
                        <span>{rotation_period}</span>
                    </li>
                    <li className="rendom-planet__item">
                        <span>Diametr </span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}