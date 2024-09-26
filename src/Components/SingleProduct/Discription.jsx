import React from 'react'

const Discription = () => {
  return (
    <>
    <div class="flex flex-col items-center justify-center   border-t-2 border-t-[#9F9F9F]">
     
     <div class="w-full max-w-[649px] h-auto mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between pt-10 pb-10 gap-4 text-center">
 <Link to="/Home" class="text-[24px] font-poppins font-bold w-[269px]">Description</Link>
 <Link to="/Home" class="text-[24px] font-poppins w-[269px]">Additional Information</Link>
 <Link to="/Home" class="text-[24px] font-poppins w-[269px]">Reviews [5]</Link>
</div>

           
           <div class="w-full max-w-[1026px] h-auto flex flex-col text-[16px] font-poppins text-justify overflow-hidden sm:flex-wrap lg:flex-nowrap">
 <p class="mb-8 ">
   Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
 </p>
 <p class="mb-8 ">
   Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
 </p>
</div>
</div>
    </>
  )
}

export default Discription