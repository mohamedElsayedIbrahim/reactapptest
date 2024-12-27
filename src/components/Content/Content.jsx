import React, { Component } from 'react'
import logoImage from './../../logo.svg'

export default class Content extends Component {
  render() {
    return (
      <div className='warper'>
        <div className='text-center'>
          <img className='w-50' src={logoImage} alt="imag data" />
        </div>
        <p className='text-danger'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, laborum laboriosam itaque doloribus quisquam dolor dignissimos. Dicta ab laudantium voluptas sed ipsum minima adipisci fuga, doloremque nulla temporibus architecto deleniti.
        </p>
      </div>
    )
  }
}
