import React, { useState } from "react";
import styles from "./styles.module.scss";
import { TypeAnimation } from "react-type-animation";
import TextField from "../text-field/TextField";
import MessageBox from "../message-box/MessageBox";
import TextArea from "../text-area/TextArea";

var typingSequence: any[] = [
  "Do the dishes",
  1000,
  "Take the dog for a walk",
  1000,
  "Feed the cat",
  1000,
  "Do the homework",
  1000,
];

export default function TodoForm() {
  const [inputValue, setInputValue] = useState<String | null>(null);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setInputValue(value);
  }
  return (
    <div className={styles.todoFormComponent}>
      <TextField
        placeholderSequence={typingSequence}
        onChange={(event) => handleChange(event)}
      />
      {inputValue ? <TextArea /> : null}
    </div>
  );
}
