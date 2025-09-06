import React, { useState } from "react";
import styles from "./styles.module.scss";
import TextField from "../text-field/TextField";
import TextArea from "../text-area/TextArea";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema, TTodoForm } from "./schemas/todo";
import { TTodoFormProps } from "./models/todo-form-props";
import { TFormFields } from "./models/form-fields";
import { typingSequence } from "./utils/typing-sequence";

export default function TodoForm({onComplete} : TTodoFormProps) {
  
  const {
    register,
  } = useForm<TTodoForm>({
    resolver: zodResolver(todoSchema)
  });

  const [form, setForm] = useState<TFormFields>({
    title: "",
    description: "",
  });

  function handleDescriptionChange(
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setForm(
      (prevFormState) =>
        ({
          ...prevFormState,
          description: event.target.value,
        }satisfies TFormFields)
    );
  }

  function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setForm(
      (prevFormState) =>
        ({ ...prevFormState, title: event.target.value } satisfies TFormFields)
    );
  }

  function submitTodo() {
    onComplete(form.title, form.description);
  }

  return (
    <div className={styles.todoFormComponent}>
      <div className={styles.textFieldContainer}>
        <TextField
          zodRegister={register("title")}
          placeholderSequence={typingSequence}
          onChange={(event) => handleTitleChange(event)}
        />
      </div>

      {form.title ? (
        <div className="fadeInFromTop">
          <TextArea onChange={(event) => handleDescriptionChange(event)} />
        </div>
      ) : null}
      {form.title ? (
        <Button
          label="Create"
          onButtonClick={(data: React.MouseEvent<HTMLButtonElement, Event>) => {
            // USE USEFORM HANDLESUBMIT BUILT IN FUNCTION? TEST
            submitTodo();
          }}
        />
      ) : null}
    </div>
  );
}
