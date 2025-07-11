import React, { useState } from "react";
import styles from "./styles.module.scss";
import TextField from "../text-field/TextField";
import TextArea from "../text-area/TextArea";
import Button from "../button/Button";

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
      {inputValue ? (
        <div className="fadeInFromTop">
          <TextArea />
        </div>
      ) : null}
      {inputValue ? (
        <Button
          label="Create"
          onClick={(data: any) => {
            console.log("data: ", data);
          }}
        />
      ) : null}
    </div>
  );
}
