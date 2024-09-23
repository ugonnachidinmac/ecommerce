import React, { useState } from 'react'
import { BrowesData } from '../Browes/BrowesData'

const Browes = () => {
    let [browes,setBrowes] = useState(BrowesData);
  return (
    <>
  {/* <div className='container1 w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 m-auto'> */}
  <div className='container1 w-full flex-col lg:flex-row'>
  {
    browes.map(each => (
      <div key={each.id}>
        <div>
          <div className="imageStyle w-ful">
            {each.image}
            <span className='browesSpan'>{each.view}</span>
          </div>
        </div>
      </div>
    ))
  }
</div>

    </>
  )
}

export default Browes