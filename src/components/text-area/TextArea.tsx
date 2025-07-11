import React from 'react';
import styles from './styles.module.scss';
import "../../declaration.d.ts";

export default function TextArea() {
  return (
    <div className={styles.textAreaComponent}>
        <textarea draggable={false} placeholder='Some description'/>
    </div>
  )
}
