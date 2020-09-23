import React from 'react';
import styles from './conatin.module.scss';

const contain = props => (
  <div className={[styles.contain, props.style].join(' ')}>
    {props.children}
  </div>
);

export default contain;
