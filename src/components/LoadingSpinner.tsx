import React from 'react';

export default function LoadingSpinner({ txt = 'Loading...' }) {
  return (
    <div className="loader">
      <svg className="loader__img" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M64.0794 32.3295C64.0794 28.1247 63.2512 23.9611 61.6421 20.0765C60.033 16.1918 57.6745 12.6621 54.7013 9.68885C51.7281 6.71564 48.1984 4.35716 44.3137 2.74807C40.429 1.13898 36.2654 0.310791 32.0607 0.310791L32.0607 6.71453C35.4245 6.71453 38.7554 7.37708 41.8631 8.66435C44.9709 9.95162 47.7946 11.8384 50.1732 14.217C52.5518 16.5955 54.4385 19.4193 55.7258 22.5271C57.0131 25.6348 57.6756 28.9657 57.6756 32.3295H64.0794Z" fill="#05B5BB" />
      </svg>
      <p className="loader__txt">
        {txt}
      </p>
    </div>
  )
}
