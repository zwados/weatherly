import React from 'react';
import '../styles/Logo.scss';

const Logo = (props) => {
    return (<div style={{ display: (props.isHidden && window.innerWidth < 768) ? 'none' : 'inline-block' }} className="logo">Weatherly</div>);
}

export default Logo;