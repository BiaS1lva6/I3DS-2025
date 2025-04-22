import React from 'react'
import PromoCard from './PromoCard'

const Promotion = () => {
  return (
    <div id='promotion' className='container w-50 my-5'>
        <h2 className='text-uppercase'>Promoções</h2>
        <div id='itensPromo'
         className='d-flex flex-wrap gap-4 justify-content-between'>
          {/* inserir os cards de promoção*/}
          <PromoCard/>
          <PromoCard/>
          <PromoCard/>
        </div>
    </div>
  )
}

export default Promotion