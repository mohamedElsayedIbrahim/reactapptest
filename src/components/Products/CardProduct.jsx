import React, { Component } from 'react'

export default class CardProduct extends Component {

  componentWillUnmount(){
    console.log('componentWillUnmount');
  }
  
  render() {    
    const {productTitle,price} = this.props
    return <>
    <div className="col-md-3">
        <div className="card">
            <div className="card-body">
                <h5 className="card-title text-truncate">{productTitle}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">price: {price}</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button type='button' onClick={this.props.removeEvent} className="btn btn-danger">delete</button>
              </div>
        </div>
        </div>
    </>
  }
}
