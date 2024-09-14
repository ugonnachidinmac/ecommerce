import React from 'react'
import { Image } from "cloudinary-react";
import { images } from "../../../data/cartImage.json";
import cartCloseIcon from '../../assets/cartCloseIcon.png'
import cartblockIcon from '../../assets/cartblockIcon.png'

const Cart = () => {
  return (
   <>
  {/* Cart Container */}
   <div className='cart-container w-[450px] min-h-[700px] flex items-end justify-start ml-[27px] position top'>
 
    <div className=' w-[417px] h-[746px] bg-white '>
        {/* section 1 */}
        <div className="top flex items-center justify-between">
            <p>Shopping Cart</p>
            <img src={cartCloseIcon} alt="" />
        </div>
 
<hr className='w-[287px] border border-1-[#D9D9D9] mt-[50px]'/>
{/* section2 */}

        <div className='flex  items-center justify-center gap-[78px] overflow-hidden mt-[45px]'>
  <Image className="w-[108px] h-[105px]" 
    loading="lazy"
    cloudName={images.cloudName}
    publicId={images.image1.url}
  />

  <div className='w-[130px]'>
    <p>Asgaard sofa</p>
    <div className='flex items-center justify-between'>
      <p>1</p>
      <p>X</p>
      <p>Rs. 250,000.00</p>
    </div>
  </div>

  <div>
    <img className="w-[20px] h-[20px]" src={cartblockIcon} alt="" />
  </div>
</div>


        <div className='flex items-center justify-center gap-[78px] overflow-hidden mt-[40px] mb-[120px]'>
              <Image
                loading="lazy"
                cloudName={images.cloudName}
                publicId={images.image2.url}
              />

              <div className='w-[130px]'>
                <p>Casaliving Wood</p>
                <div className='flex items-center justify-between'>
                    <p>1</p>
                    <p>X</p>
                    <p>Rs. 270,000.00</p>
                </div>
              </div>
              <div>
                <img className="w-[20px] h-[20px]" src={cartblockIcon} alt="" />
              </div>
            </div>
        {/* </div> */}

{/* section 3 */}
    <div className='flex items-center justify-between mr-[40px] mb-[20px]'>
        <p>Subtotal</p>
        <p>Rs. 520,000.00</p>
    </div>

{/* border: 1px solid #D9D9D9 */}
<hr className='border border-[#D9D9D9]'/>
<div className='flex items-center  gap-[15px] mt-[35px]'>
    <button className='pt-[6px] pr-[30px] pb-[6px] pl-[30px] rounded-[50px] border border-black'>Cart</button>
    <button className='pt-[6px] pr-[30px] pb-[6px] pl-[30px] rounded-[50px] border border-black'>Checkout</button>
    <button className='pt-[6px] pr-[30px] pb-[6px] pl-[30px] rounded-[50px] border border-black'>Comparison</button>
</div>
    </div>
   </div>
   </>
  )
}

export default Cart