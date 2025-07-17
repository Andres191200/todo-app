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

    useEffect(() => {
    const dialog = modalRef.current;

    if (!dialog) return;

    if (isOpen && !dialog.open) {
      dialog.showModal(); 
    }

    else if (!isOpen && dialog.open) {
      dialog.close();
    }
  }, [isOpen, onClose]);

  return (
    <dialog className={styles.modalComponent} ref={modalRef}>
      {children}
      <div className={styles.buttonContainer}>
        <Button label="Close" onButtonClick={() => onClose()} />
      </div>
    </dialog>
  );
}
