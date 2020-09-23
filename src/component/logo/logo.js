import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './logo.module.scss';
import logo from '../../images/logo.svg';
import logoWhite from '../../images/logoWhite.svg';

const Logo = props => {
  const history = useHistory();

  const clicked = () => {
    history.push('/');
  };

  return (
    <div className={styles.logo} onClick={clicked}>
      <img
        src={props.white ? logoWhite : logo}
        alt="logo"
      />
    </div>
  );
};

export default Logo;
