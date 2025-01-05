const { Component } = require("react");


export default class About extends Component{

    state = {
        userName:"Mohamed Elsayed"
    }
    

    render(){
        return <div>
            <h1><i className="fa-solid fa-house text-danger"></i> wlecome, {this.state.userName}</h1>
        </div>
    }
}