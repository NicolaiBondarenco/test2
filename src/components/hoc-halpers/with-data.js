import React, {Component} from "react";

import Spiner from "../spiner/spiner";

import './with-data.css';

const withData = (View, getItemList) => {
    return class extends Component{

        state = {
            itemList: null
        }
    
        componentDidMount(){
    
            getItemList()
                .then((itemList) => {
                    this.setState({itemList})
                })
        }

        render(){

            const {itemList} = this.state;
        
            if(!itemList){
                return <Spiner/>
            }

            return(
                <View {...this.props} itemList={itemList} />
            )
        }
    }
}

export default withData;