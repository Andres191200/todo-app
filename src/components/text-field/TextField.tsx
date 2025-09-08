import { TypeAnimation } from "react-type-animation";
import "../../declaration.d.ts";
import styles from "./styles.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";

type TTextFieldProps = {
  placeholderSequence?: any[];
  zodRegister: UseFormRegisterReturn;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "placeholder">;

export default function TextField({
  placeholderSequence,
  onChange,
  placeholder,
  zodRegister,
  ...rest
}: TTextFieldProps) {
  return (
    <div className={styles.textFieldComponent}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder={placeholder || ''}
          {...zodRegister}
          onChange={(event) => onChange ? onChange(event) : zodRegister.onChange(event)}
          {...rest}
        />
        {placeholderSequence ? (
          <div className={styles.placeholderWrapper}>
            <TypeAnimation
              sequence={placeholderSequence}
              wrapper="span"
              repeat={Infinity}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
