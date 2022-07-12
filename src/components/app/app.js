import React, { Component } from "react";

import './app.css';

import Header from "../header/header";
import RendomPlanet from "../rendom-planet/rendom-planet";
import ErrorEndicator from "../error-endicator/error-endicator";
import Error from "../error/error";
import { SwapiServiceProvider } from "../sw-context/sw-context";
import SwapiService from "../../service/swapi-service";
import PeoplePage from "../pages/people-page";
import PlanetPage from "../pages/planet-page";
import StarshipPage from "../pages/starship-page";
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        error: false
    }

    componentDidCatch(){
        this.setState({
            error: true
        })
    }

    render(){

        if(this.state.error){
            return <Error/>
        }

        
        const {userId} = useParams;

        return(
            <div className="app">
                <SwapiServiceProvider value={this.swapiService}>
                    <BrowserRouter>

                        <Header/>
                        <RendomPlanet/>
                        <ErrorEndicator/>

                        <Routes>

                            <Route path="/" element={<h2>Welcome to StarDB</h2>} />          
                            <Route path="/people" element={<PeoplePage/>}/>
                            <Route path="/planet" element={<PlanetPage/>}/>
                            <Route path="/starship" element={<StarshipPage/>}/>

                        </Routes>
                    </BrowserRouter>
                </SwapiServiceProvider>
            </div>
        )
    }
}