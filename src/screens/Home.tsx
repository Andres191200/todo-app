import styles from "./styles.module.scss";
import "../declaration.d.ts";
import TextField from "../components/text-field/TextField.tsx";
import TodoForm from "../components/todo-form/TodoForm.tsx";
import { useEffect, useRef, useState } from "react";
import { Todo } from "../models/todo.ts";
import TodoCard from "../components/todo-card/TodoCard.tsx";
import Button from "../components/button/Button.tsx";
import Modal from "../components/modal/Modal.tsx";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className={styles.homeScreen}>
      {isModalOpen ? (
        <Modal
          isOpen={isModalOpen}
          onClose={() => {
            console.log("ONCLOSE");
            setIsModalOpen(false);
          }}
        >
          <h2>New todo</h2>
          <TodoForm
            onComplete={(title, description) => {
              setIsModalOpen(false);
              setTodos((prevTodos) => [
                ...prevTodos,
                { title: title, description: description },
              ]);
            }}
          />
        </Modal>
      ) : null}
      {todos.length > 0 ? (
        <div className={styles.todosContainer}>
          <div className={styles.todosGrid}>
            {todos.map((todo) => (
              <TodoCard todo={todo} />
            ))}
          </div>
          <Button
            label="new todo"
            onButtonClick={() => setIsModalOpen((prevState) => !prevState)}
          />
        </div>
      ) : (
        <>
          <h1>Welcome to a simple ToDo App!</h1>
          <p className={styles.subtitle}>
            Create your first To Do right away :)
          </p>
          <TodoForm
            onComplete={(title, description) =>
              setTodos((prevTodos) => [
                ...prevTodos,
                { title: title, description: description },
              ])
            }
          />
        </>
      )}
    </div>
  );
}
