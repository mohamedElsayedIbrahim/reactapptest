import React, { Component } from 'react'
import Cardservice from '../Layouts/Cardservice'

export default class Services extends Component {
  render() {
    return (
      <section className='container mb-3'>
        <h2 className='text-center text-uppercase mb-3'>my <span className='text-danger'>services</span></h2>
        
        <div className='row gy-3'>
            <Cardservice title="service 1" iconClass="fa-solid fa-house border border-danger rounded fa-2x p-2 text-danger" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga distinctio itaque, temporibus dolore ipsam facere quasi voluptatem soluta odio quo tempora labore vel! Aliquid dolores id laboriosam tempora porro delectus!"/>
            <Cardservice title="service 2" iconClass="fa-solid fa-car border border-danger rounded fa-2x p-2 text-danger" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga distinctio itaque, temporibus dolore ipsam facere quasi voluptatem soluta odio quo tempora labore vel! Aliquid dolores id laboriosam tempora porro delectus!"/>
            <Cardservice title="service 3" iconClass="fa-solid fa-pen border border-danger rounded fa-2x p-2 text-danger" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga distinctio itaque, temporibus dolore ipsam facere quasi voluptatem soluta odio quo tempora labore vel! Aliquid dolores id laboriosam tempora porro delectus!"/>
            <Cardservice title="service 4" iconClass="fa-solid fa-car border border-danger rounded fa-2x p-2 text-danger" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga distinctio itaque, temporibus dolore ipsam facere quasi voluptatem soluta odio quo tempora labore vel! Aliquid dolores id laboriosam tempora porro delectus!"/>
            <Cardservice title="service 5" iconClass="fa-solid fa-pen border border-danger rounded fa-2x p-2 text-danger" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga distinctio itaque, temporibus dolore ipsam facere quasi voluptatem soluta odio quo tempora labore vel! Aliquid dolores id laboriosam tempora porro delectus!"/>
            <Cardservice title="service 6" iconClass="fa-solid fa-house border border-danger rounded fa-2x p-2 text-danger" description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga distinctio itaque, temporibus dolore ipsam facere quasi voluptatem soluta odio quo tempora labore vel! Aliquid dolores id laboriosam tempora porro delectus!"/>
        </div>
      </section>
    )
  }
}
