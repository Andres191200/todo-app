import { TypeAnimation } from "react-type-animation";
import "../../declaration.d.ts";
import styles from "./styles.module.scss";

var typingSequence: any[] = [
  "Do the dishes",
  1000,
  "Take the dog for a walk",
  1000,
  "Feed the cat",
  1000,
  "Do the homework",
  1000
];

export default function TextField() {
  return (
    <div className={styles.textFieldComponent}>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="" />
        <div className={styles.placeholderWrapper}>
          <TypeAnimation sequence={typingSequence} wrapper="span" repeat={Infinity}/>
        </div>
      </div>
    </div>
  );
}
