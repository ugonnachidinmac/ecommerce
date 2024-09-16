import React from 'react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import cartCloseIcon from '../../assets/cartCloseIcon.png';

const CartSlider = ({show, setShow}) => {
  let redir = useNavigate()
  let handleClose=(e)=>{
    e.stopPropagation();
    setShow(prev=> !prev)
  }
  return (
    <div onClick={handleClose} className={classNames('w-full h-[3107px] bg-[#00000033] fixed top-0 left-0 z-40', {
      'hidden' : !show
    })}>
      <div onClick={(e)=>  e.stopPropagation()} className=" parent w-[417px] min-h-[746px] bg-white text-black fixed right-0 top-0 pt-[25px] ">
        <div className='w-[350px] flex items-center justify-between  pl-[30px] '>
        <h4 className='font-[Poppins] text-[24px]'>Shopping Cart</h4>
        <button onClick={(e)=> handleClose(e)} className=""><img src={cartCloseIcon} alt="" /></button>
        </div>

            <div className='bottomContainer relative top-[430px]'>
            <div className='flex items-center  gap-[140px] pb-[25px] pr-[40px] mb-[20px]  border-none border-b-2 border-b-[#9F9F9F]  pl-[30px]'>
                    <p className='font-[Poppins] text-[16px] font-bold'>Subtotal</p>
                    <p className='font-[Poppins] text-[16px] font-bold text-[#b49651]'>Rs. 520,000.00</p>
                    </div>
                    <div className="buttonDiv grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-[25px] pl-[30px] pr-[60px]">
                    <button onClick={(e) =>{handleClose(e); redir('/Cart')}} className='outline outline-black-300 p-2 rounded-[20px] w-[87px] font-[Poppins] text-[12px] font-bold'>Cart</button>
                    <button onClick={(e) =>{handleClose(e); redir('/CheckOut')}}  className='w-[118px] outline outline-black-300 p-2 rounded-[20px] font-[Poppins] text-[12px] font-bold' >Checkout</button>
                    <button onClick={(e) =>{handleClose(e); redir('/Comparison')}} className='w-[135px] outline outline-black-300 p-2 rounded-[20px] font-[Poppins] text-[12px] font-bold'>Comparison</button>
                    </div>
            </div>
            
      </div>
    </div>
  )
}

export default CartSlider;