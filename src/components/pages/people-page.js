import React, {Component} from "react";

import Row from "../row/row";
import { PersonList } from "../sw-component/list";
import PersonDetails from "../sw-component/person-details";

export default class PeoplePage extends Component {

    state = {
        selectedItem: 25
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render(){
        return(
            <Row 
                left={<PersonList onItemSelected={this.onItemSelected} />}
                right={<PersonDetails itemId={this.state.selectedItem} />}
            />
        )
    }
}