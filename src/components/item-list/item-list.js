import React, { Component } from "react";

import './item-list.css';

export default class ItemList extends Component {

    createItem(arr){

        const item = arr.slice(0, 5);

        return item.map((el) => {
            const { id } = el;
            const label = this.props.children(el);

            return <li className="item-list__elem list-group-item" 
                        key={id}
                        onClick={() => this.props.onItemSelected(id)} >
                            {label}
                    </li>
        })
    }

    render(){
        const {itemList} = this.props;
        const items = this.createItem(itemList)
        
        return(
            <ul className="item-list list-group">
                {items}
            </ul>
        )
    }
}