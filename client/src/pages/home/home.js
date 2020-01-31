import React from 'react';
// import './home.styles.scss';
import Directory from '../../components/directory/directory';
import { HomePageContainer } from './home.styles';

export default function HomePage() {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
}
