import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Header.css'


const Header = () => {
    return (
        <div>
            <h3 className=''>SuperFit <FontAwesomeIcon icon={faDumbbell} /></h3>
            <p>Select Today's Excercise</p>
        </div>
    );
};

export default Header;