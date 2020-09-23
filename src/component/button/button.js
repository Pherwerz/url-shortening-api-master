import React from 'react';
import styles from './button.module.scss';

const Button = props => {
  let addStyle = null;

  switch (props.type) {
    case 'attention':
      addStyle = styles.buttonAtt;
      break;
    default:
      addStyle = styles.buttonNor;
  }
  return (
    <button
      onClick={props.clicked}
      className={[styles.button, addStyle].join(' ')}
    >
      {props.name}
    </button>
  );
};

export default Button;
