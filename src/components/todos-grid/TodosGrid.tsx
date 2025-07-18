import React from "react";
import styles from './styles.module.scss';
import TodoCard from "../todo-card/TodoCard";
import Button from "../button/Button";
import { Todo } from "../../models/todo";

export default function TodosGrid({todos} : {todos: Todo[]}) {
  return (
    <div className={styles.todosContainer}>
      <div className={styles.todosGrid}>
        {todos.map((todo) => (
          <TodoCard todo={todo} />
        ))}
      </div>
    </div>
  );
}
