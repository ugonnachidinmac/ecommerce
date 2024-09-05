import React, { useState } from 'react'
import { BrowesData } from '../Browes/BrowesData'

const Browes = () => {
    let [browes,setBrowes] = useState(BrowesData);
  return (
    <>
    <div className='container1'>
    {
        browes.map(each=>(
                <div key={each.id}>
                    <div>
                    <div className="imageStyle">{each.image}
                        <span className='browesSpan'>{each.view}</span>
                        </div>
                    {/* <div className="viewStyle">{each.view}</div> */}
                    </div>
                    
                </div>
            ))
        
    }

    </div>
    </>
  )
}

export default Browes