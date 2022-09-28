import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import './Header.css'


const Header = () => {
    return (
        <div>
            <h3 className='text-3xl font-semibold'><FontAwesomeIcon icon={faDumbbell} /> SuperFit</h3>
            <p className='text-xl'>Select Today's Excercise</p>
        </div>
    );
};

export default Header;