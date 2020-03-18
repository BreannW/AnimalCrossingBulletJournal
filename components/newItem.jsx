import React from "react";
import PropTypes from "prop-types";
import todo from "./choreList";
import Item from "./item"

class NewItem extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        // this.addItem = this.addItem.bind(this);
           this.state = {task: '' };

        }
        onSubmit = event => {
           this.setState({ task: event.target.value });
           <Item name={this.state} /> 
           console.log(Item)
         };

        // onSubmit(event){
        //     console.log (this.props)
        //     event.preventDefault()
        // }

        // addItem(){
        //     console.log ('submitted')
        // }
   
   
    render() {
        return (
            <div>
            <Item NewItem /> 
            <form ref="form" onSubmit={this.onSubmit} className="form-inline">
                <input
                    type="text"
                    name="task"
                    value={this.state.task}
                    onChange={this.onSubmit}

                />
                <button type="submit" className="btn btn-default">
                    Add
                </button>

                
            </form>
            </div>

        );
    }
}

export default NewItem