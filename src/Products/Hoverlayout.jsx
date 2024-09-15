import React from 'react'

const Hoverlayout = () => {
  return (
    
    <div className="hoverOverlay">
    <div className="network">Add to cart</div>
    <div className="overlayIcons">
      <div className="iconItems" onClick={handleShareClick}>
        <img src={shareIcon} alt="shareIcon" />
        <p>Share</p>
      </div>
      <div className="iconItems" onClick={handleCompareClick}>
        <img src={arrowFrontandBack} alt="arrowFrontandBack" />
        <p>Compare</p>
      </div>
      <div className="iconItems" onClick={() => handleLikeClick(each.id)}>
        <img src={love} alt="love" />
        <p>{likedProducts[each.id] ? 'Liked' : 'Like'}</p> {/* Toggle 'Liked' and 'Like' */}
      </div>
    </div>
  </div>
  )
}

export default Hoverlayout