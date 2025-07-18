import React, { useState } from "react";
import styles from "./styles.module.scss";
import TextField from "../text-field/TextField";
import TextArea from "../text-area/TextArea";
import Button from "../button/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { todoSchema, TTodoForm } from "../../schemas/todo";

var typingSequence: any[] = [
  "Do the dishes",
  1000,
  "Take the dog for a walk",
  1000,
  "Feed the cat",
  1000,
  "Do the homework",
  1000,
] as const;

type TFormFields = {
  title: string;
  description: string;
};

type TTodoFormProps = {
  onComplete: (title: string, subtitle?: string) => void;
}

export default function TodoForm({onComplete} : TTodoFormProps) {
  const {
    register,
    handleSubmit,
    formState: {errors} 
  } = useForm<TTodoForm>({
    resolver: zodResolver(todoSchema)
  })
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
        } satisfies TFormFields)
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
            submitTodo();
          }}
        />
      ) : null}
    </div>
  );
}
