import { TypeAnimation } from "react-type-animation";
import "../../declaration.d.ts";
import styles from "./styles.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";

type TTextFieldProps = {
  placeholderSequence: any[],
  zodRegister: UseFormRegisterReturn,
  onChange: (event:React.ChangeEvent<HTMLInputElement>) => void,
}

export default function TextField({placeholderSequence, onChange, zodRegister}: TTextFieldProps) {
  return (
    <div className={styles.textFieldComponent}>
      <div className={styles.inputContainer}>
        <input type="text" {...zodRegister} placeholder="" onChange={onChange}/>
        <div className={styles.placeholderWrapper}>
          <TypeAnimation sequence={placeholderSequence} wrapper="span" repeat={Infinity}/>
        </div>
      </div>
    </div>
  );
}
