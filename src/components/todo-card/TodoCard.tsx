import React from 'react'
import styles from './styles.module.scss';
import { Todo } from '../../models/todo';
import "../../declaration.d.ts";


export default function TodoCard({todo}: {todo: Todo}) {
  return (
    <div className={styles.todoCardComponent}>
        <h4>{todo.title}</h4>
        <div className={styles.separator} />
        <p>{todo.description || 'No description'}</p>
    </div>
  )
}
