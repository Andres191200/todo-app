import React from 'react'
import TodosGrid from '../todos-grid/TodosGrid'
import Button from '../button/Button'
import styles from './styles.module.scss';
import TodoForm from '../todo-form/TodoForm';

export default function TodosSection({ todos, onNewTodoHandleClick, onCompleteForm}) {
  return (
    <div className={styles.todosSectionComponent}>
        {
            todos.length > 0 ? (
        <div className={styles.todosGridContainer}>
          <TodosGrid todos={todos} />
          <Button
            label="new todo"
            onButtonClick={onNewTodoHandleClick}
          />
        </div>
      ) : (
        <>
          <h1>Welcome to a simple ToDo App!</h1>
          <p className={styles.subtitle}>
            Create<span className="highlight bold"> your first To Do </span> right away :)
          </p>
          <TodoForm
            onComplete={(title, description) =>
              onCompleteForm(title, description)
            }
          />
        </>
      )
        }
    </div>
  )
}
