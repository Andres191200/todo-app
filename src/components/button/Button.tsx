import React, { ReactHTMLElement } from "react";
import styles from "./styles.module.scss";
import "../../declaration.d.ts";

type TButtonProps = {
  onButtonClick: (data: any) => void;
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  onButtonClick,
  label,
  ...rest
}: TButtonProps) {
  return (
    <div className={styles.buttonComponent}>
      <button
        className={styles.button}
        {...rest}
        onClick={(event: React.MouseEvent<HTMLButtonElement, Event>) =>
          onButtonClick((event.target))
        }
      >
        {label}
      </button>
    </div>
  );
}
