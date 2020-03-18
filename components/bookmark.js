import React, { Component } from "react";
import Item from "./item";
const axios = require('axios').default;

const TodoForm = ({ addTodo, removeVals }) => {
	// Input Tracker
	let input;
	// Return JSX
	return (
		<form
			id="choreInput"
			onSubmit={e => {
				e.preventDefault();
				addTodo(input.value);
				input.value = "";
			}}
		>
			<input
				className="form-control col-md-12"
				ref={node => {
					input = node;
				}}
			/>

			<button> Add Chore </button>
			<button onClick={e=> {
				e.preventDefault();
				removeVals();
			}}
			> Reset List </button>
			<div id="timmy">
				<img src="../static/timmy.png" />
			</div>
		</form>
	);
};

const Todo = ({ todo }) => {
    // Each Todo
    return (
        <a href="#" className="list-group-item">
			{todo.name}
		</a>
    );
};

const TodoList = ({ todos }) => {
    const todoNode = todos.map(todo => {
        return <Item name={todo} key={todo.id} />;
    });
    return (
    	<div className="listContainer">
        <div className="mobileList">
			{todoNode}


		</div>


			<div id="timmyMobile">
				<img src="../static/timmy.png" />
			</div>
		</div>


		
    );
};

class Bookmark extends Component {
    constructor(props) {
        super(props);
        this.item = props.item;
        this.state = {
            data: []
        };
        this.apiUrl = "https://5e70e46c667af7001631756c.mockapi.io/chores";
    }
    // Lifecycle method
    componentDidMount() {
        // Make HTTP reques with Axios
        axios.get(this.apiUrl).then(res => {
            // Set state with result
            this.setState({ data: res.data });
        });
        console.log(this.state.data);
    }
    // Add todo handler
    addTodo(val) {
        // Assemble data
        const todo = { name: val,
        				userAdded: true }
        // Update data
      
        if(todo.name != ''){
 			axios.post(this.apiUrl, todo)
            .then((res) => {

                this.state.data.push(res.data);
                this.setState({ data: this.state.data });
            });

        }
       
    }

    removeVals(e) {
    const remainder = this.state.data.filter((todo) => {
        if (!todo.hasOwnProperty("userAdded")) return todo;
        else axios.delete(this.apiUrl + '/' + todo.id)
    });
    this.setState({ data: remainder });


}
    
    render() {
        // Render JSX
        return (
           <div className="bookmarkContainer">
				<div className="overlay">
					<div className="bookmark">
						<div id="choreList">
							<h1> My Daily Chores </h1>

							<TodoList todos={this.state.data} />
						</div>

						<TodoForm
							addTodo={this.addTodo.bind(this)}
							removeVals={this.removeVals.bind(this)}
						/>
					</div>
					<div className="bookmarkBottom-wrap">
						<div className="bookmarkBottom">
							<img src="../static/bookmarkBottom.svg" />
						</div>
					</div>
				</div>
			</div>
			
        );
    }
}
export default Bookmark;