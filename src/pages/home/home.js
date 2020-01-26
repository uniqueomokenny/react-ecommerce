import React from 'react';
import './home.styles.scss';
import MenuItem from '../../components/menu-item/menu-item';
import Directory from '../../components/directory/directory';

export default function HomePage() {
  return (
    <div className='homepage'>
      <Directory />
    </div>
  );
}
