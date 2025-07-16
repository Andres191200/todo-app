import React, { PropsWithChildren, useEffect, useRef } from "react";
import styles from "./styles.module.scss";
import Button from "../button/Button";

type TModal = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({
  children,
  isOpen,
  onClose,
}: PropsWithChildren<TModal>) {
  const modalRef = useRef<HTMLDialogElement>(null);

  if (!isOpen) {
    return null;
  }

  return (
    <dialog className={styles.modalComponent} ref={modalRef}>
      {children}
      <div className={styles.buttonContainer}>
        <Button label="Close" onButtonClick={() => onClose()} />
      </div>
    </dialog>
  );
}
