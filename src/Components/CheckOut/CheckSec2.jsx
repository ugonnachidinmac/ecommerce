import React from 'react'
import BillingForm from '../../Components/CheckOut/BillingForm'
import OrderForm from '../../Components/CheckOut/OrderForm'

const CheckSec2 = () => {
  return (
    
    <>
    
    <section className='formSection w-full'>
      <h2 className='pl-[100px] text-[36px] font-[Poppins] font-bold pt-[50px]'>Billing details</h2>
      <div className='flex flex-col lg:flex-row pl-[100px] pr-[98px] pt-[20px] gap-[65px]'>
      <BillingForm />
      <OrderForm />
      </div>
      </section>
    
    </>
  )
}

export default CheckSec2