import React, { Component } from 'react'

export default class Cardservice extends Component {

  render() {
    const {iconClass,title,description} = this.props; //dustructing

    return <div className='col-md-4'>
    <div className='border p-3 text-center'>
        <div>
        <i className={iconClass}></i>
        </div>
        <h3 className='text-uppercase'>{title}</h3>
        <p>{description}</p>
    </div>
</div>
  }
}
