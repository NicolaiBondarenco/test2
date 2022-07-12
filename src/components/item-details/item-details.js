import React, { Component } from "react";
import SwapiService from "../../service/swapi-service";
import ErrorEndicator from "../error-endicator/error-endicator";
import Error from "../error/error";

import './item-details.css';


const Record = ({item, field, label}) => {
    return(
        <li className="person-details__item">
            <span>{label}: </span>
            <span>{item[field]}</span>
        </li>
    )
}
export {
    Record
};


export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        image: null
    }

    componentDidMount(){
        this.updatePerson();
    }

    componentDidUpdate(prevProps){
        if(this.state.item !== prevProps){
            this.updatePerson()
        }
    }

    updatePerson(){
        const {itemId, getData, imageUrl} = this.props;
        if(!itemId){
            return;
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: imageUrl(item)
                })
            })
    }

    render(){

        const { item, image } = this.state;

        if(!item){
            return <Error/>
        }
        const {name} = this.state.item;

        return(
            <div className="person-details">
                <img className="person-details__img" src={image} alt="#" />
                <div className="person-details__box">
                    <h3 className="person-details__title">{name}</h3>
                    <ul className="person-details__list">
                        {
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, {item});
                            })
                        }
                    </ul>
                    <ErrorEndicator/>
                </div>
            </div>
        )
    }
}