import React from 'react';
import CSS from './Header.css';

const Header = (props) => {
  return <div className={CSS.Header}>
            <h1 className={CSS.title}>
                Stock App        
            </h1>
          </div>
};
export default Header;