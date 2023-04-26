import React from 'react'

export default function Sort() {
  return (
    <div className="sort">
      <p className="sort__txt">
        Sort by: <span className="sort__selected">influence</span>
      </p>
      <ul className="sort__list list">
        <li className="sort__option">influence</li>
        <li className="sort__option">price</li>
        <li className="sort__option">alphabet</li>
      </ul>
    </div>
  )
}
