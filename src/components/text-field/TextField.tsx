import { TypeAnimation } from "react-type-animation";
import "../../declaration.d.ts";
import styles from "./styles.module.scss";

type TTextFieldProps = {
  placeholderSequence: any[],
  onChange: (event:React.ChangeEvent<HTMLInputElement>) => void,
}

export default function TextField({placeholderSequence, onChange}: TTextFieldProps) {
  return (
    <div className={styles.textFieldComponent}>
      <div className={styles.inputContainer}>
        <input type="text" placeholder="" onChange={onChange}/>
        <div className={styles.placeholderWrapper}>
          <TypeAnimation sequence={placeholderSequence} wrapper="span" repeat={Infinity}/>
        </div>
      </div>
    </div>
  );
}
