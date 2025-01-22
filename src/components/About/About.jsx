import { Outlet, Link } from "react-router";
const { Component } = require("react");


export default class About extends Component{
  
    render(){
        return <>

        <div className="container my-5">
            <div className="row">
                <div className="col-md-3">
                <div>
                <ul class="nav flex-column">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/about-us">History</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about-us/vision">vision</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about-us/mission">mission</Link>
                    </li>
                    </ul>
                </div>
                </div>

                <div className="col-md-9">
                    <Outlet />
                </div>
            </div>
        </div>
        </>
    }
}