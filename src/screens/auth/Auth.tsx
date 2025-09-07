import React from 'react'
import styles from './styles.module.scss';

export default function Auth() {
  return (
    <div className={styles.authScreen}>
        <input placeholder='username'></input>
        <input placeholder='password'></input>
    </div>
  )
}
