import React from 'react';
import styles from './styles.module.scss';

export default function TextArea() {
  return (
    <div className={styles.textAreaComponent}>
        <textarea draggable={false} placeholder='Some description'/>
    </div>
  )
}
