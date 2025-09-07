import React from 'react';
import styles from './styles.module.scss';

export default function NotFound() {
  return (
    <div className={styles.notFoundScreen}>
        <h1>Page not found</h1>
        <a href="/">Go back to home</a>
    </div>
  )
}
