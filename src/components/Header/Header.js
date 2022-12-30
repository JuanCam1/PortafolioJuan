import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className='portHeader' >
      <ul>
        <li>
          <a href='#portHome'>
            <i className='fa-solid fa-house'></i>
          </a>
        </li>
        <li>
          <a href='#portAbout'>
            <i className='fa-solid fa-user'></i>
          </a>
        </li>
        <li>
          <a href='#portExperinses'>
            <i className='fa-solid fa-list-check'></i>
          </a>
        </li>
        <li>
          <a href='#portProjects'>
            <i className='fa-solid fa-folder-open'></i>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
