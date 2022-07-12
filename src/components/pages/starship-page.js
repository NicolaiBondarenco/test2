import React, { Component } from "react";

import Row from "../row/row";
import StarshipDetails from "../sw-component/starship-details";
import { StarshipsList } from "../sw-component/list";

export default class StarshipPage extends Component {

    state = {
        selectedItem: 10
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render(){
        return(
            <Row 
                left={<StarshipsList onItemSelected={this.onItemSelected} />}
                right={<StarshipDetails itemId={this.state.selectedItem} />}
            />
        )
    }
}