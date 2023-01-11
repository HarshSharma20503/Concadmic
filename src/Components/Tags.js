import React from 'react'
import './Components.scss';

const Tags = () => {
  return (
    <div>
        <div>
            <div className="blog-heading text-start py-2 mb-4 text-white">Tags</div>
        </div>
        <div className="tags">
                <p className='tag' >Fun </p>
                <p className='tag' >Placement</p>
                <p className='tag' >Education</p>
                <p className='tag' >Other </p>
        </div>
    </div>
  )
}

export default Tags;