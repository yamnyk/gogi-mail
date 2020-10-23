import React from 'react';

const emailLogo = (className, styles) => (
  <svg className={className} version="1.1" id="Layer_1"
       x="0px" y="0px"
       viewBox="0 0 512 512" style={{"enableBackground":"new 0 0 512 512", ...styles}}>
    <g>
      <path d="M64.9,112l191.3,140.2l191-140.2H64.9z M480,127.6L265.6,284.9c-5.6,4.1-13.3,4.1-18.9,0L32,127.6V400h448V127.6z M32,80
		h448c17.7,0,32,14.3,32,32v288c0,17.7-14.3,32-32,32H32c-17.7,0-32-14.3-32-32V112C0,94.3,14.3,80,32,80z"/>
    </g>
  </svg>
);


export default emailLogo;