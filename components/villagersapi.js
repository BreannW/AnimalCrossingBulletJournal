import React, { Component } from 'react';
import Villager from "./villager"

const axios = require('axios').default;

class VillagerListApi extends Component {
    constructor(props) {
        super(props);
        this.item = props.item;
        this.key = props.key;
        this.name = props.name;
        this.img = props.img
        this.personality = props.personality;
        this.birthday = props.birthday;
        this.state = {
            data: [] 
        };
        this.apiUrl = "https://5e70e46c667af7001631756c.mockapi.io/villagers";
    }



    // Lifecycle method
    componentDidMount() {
        // Make HTTP reques with Axios
        axios.get(this.apiUrl).then(res => {
            // Set state with result
            this.setState({ data: res.data });
        });
    }





    render() {
        console.log(this.state.data[0])
        let vList = [];

        if (this.state.data.length > 0) {
            for (var i = 0; i < 9; i++) {

                console.log(this.state.data[i].Name)

                vList.push(

                    <Villager 
                    name = {this.state.data[i].Name}
                    img = {this.state.data[i].Image ? this.state.data[i].Image : '../static/Alfonso.png'}
                    personality = {this.state.data[i].Personality}
                    birthday = {this.state.data[i].Birthday}
                />
                )
            }
        }
        return (


            [vList]
        )
    }


}


export default VillagerListApi