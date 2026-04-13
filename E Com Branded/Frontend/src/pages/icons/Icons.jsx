import React from 'react';

import i1 from './logo-adidas.svg';
import i2 from './logo-asos.svg';
import i3 from './logo-celine.svg';
import i4 from './logo-chanel.svg';
import i5 from './logo-gucci.svg';

const LogoDisplay = () => {
  return (
    <div className='flex flex-wrap gap-24 justify-center items-center p-12 border-b-2 border-black'>
      <img src={i2} alt="Asos logo" className="w-24 h-auto" />
      <img src={i4} alt="Chanel logo" className="w-24 h-auto" />
      <img src={i5} alt="Gucci logo" className="w-24 h-auto" />
      <img src={i3} alt="Celine logo" className="w-24 h-auto" />
      <img src={i1} alt="Adidas logo" className="w-24 h-auto" />
    </div>
  );
}

export default LogoDisplay;
