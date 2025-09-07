import { TypeAnimation } from "react-type-animation";
import "../../declaration.d.ts";
import styles from "./styles.module.scss";
import { UseFormRegisterReturn } from "react-hook-form";

type TTextFieldProps = {
  placeholderSequence?: any[];
  zodRegister: UseFormRegisterReturn;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange">;

export default function TextField({
  placeholderSequence,
  onChange,
  zodRegister,
  ...rest
}: TTextFieldProps) {
  return (
    <div className={styles.textFieldComponent}>
      <div className={styles.inputContainer}>
        <input
          type="text"
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
