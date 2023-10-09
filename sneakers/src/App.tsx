import React from 'react';
import styles from './App.module.scss';
import { Header, Home } from './components';

export const App = () => {
  return (
    <div className={styles.app}>
      <Header/>
      <Home/>
    </div>
  );
}
