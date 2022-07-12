import React, { Component } from "react";

import Row from "../row/row";
import { PlanetsList } from "../sw-component/list";
import PlanetDetails from "../sw-component/planet-details";

export default class PlanetPage extends Component {

    state = {
        selectedItem: 15
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render(){
        return(
            <Row 
                left={<PlanetsList onItemSelected={this.onItemSelected} />}
                right={<PlanetDetails itemId={this.state.selectedItem} />}
            />
        )
    }
}