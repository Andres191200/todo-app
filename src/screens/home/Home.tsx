import styles from "./styles.module.scss";
import TodoForm from "../../components/todo-form/TodoForm.tsx";
import { useEffect, useRef, useState } from "react";
import { Todo } from "../../models/todo.ts";
import TodoCard from "../../components/todo-card/TodoCard.tsx";
import Button from "../../components/button/Button.tsx";
import Modal from "../../components/modal/Modal.tsx";
import { supabase } from "../../supabase-client/supabaseClient.ts";
import TodosSection from "../../components/todos-section/TodosSection.tsx";

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      console.log("data: ", data);
    });
    setLoading(false);
  });

  if (loading) {
    return (
      <div className={styles.homeScreen}>
        <h2>Loading....</h2>
      </div>
    );
  }

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
      <TodosSection
        onNewTodoHandleClick={() => setIsModalOpen((prevState) => !prevState)}
        todos={todos}
        onCompleteForm={(title:string, description:string) =>
          setTodos((prevTodos) => [
            ...prevTodos,
            { title: title, description: description },
          ])
        }
      />
    </div>
  );
}
