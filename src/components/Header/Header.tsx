
import React from 'react';
import './style.css';
import img from '../../assets/150.png';
import useStore from 'host/store'

const Header: React.FC = () => {
    const { count, clear } = useStore()

    return (
        <header className='header'>
            <div className="elements">
                <p>Header{count}</p>
                <button onClick={clear}>clear store</button>
                <img src={img} alt="avatar" />
            </div>
        </header>
    );
};

export default Header;
