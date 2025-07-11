import React, { ReactHTMLElement } from "react";
import styles from './styles.module.scss';
import "../../declaration.d.ts";

type TButtonProps = {
    onClick: () => void;
    label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button<TButtonProps>({ onClick, label, ...rest}) {
  return (
    <div className={styles.buttonComponent}>
      <button className={styles.button} {...rest}>
        {label}
      </button>
    </div>
  );
}
