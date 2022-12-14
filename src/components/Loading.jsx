import React from 'react'

export default function Loading() {
  return (
    <div className="loadingContainer">
      <div class="spinner-border text-info" role="status"></div>
      <p className='loadingText'>Loading...</p>
    </div>
  )
}
