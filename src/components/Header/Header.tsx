
import React from 'react';
import './style.css';
import img from '../../assets/150.png';

const Header: React.FC = () => {
    return (
        <header className='header'>
            <div className="elements">
                <p>Header tsx</p>
                <img src={img} alt="avatar" />
            </div>
        </header>
    );
};

export default Header;
