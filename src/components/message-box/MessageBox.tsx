import React from "react";
import styles from "./styles.module.scss";

enum EMessageBoxIcons {
  info,
  error,
  warning,
}

type TMessageBoxProps = {
  message: string;
  kind?: EMessageBoxIcons;
};

function getPath(icon: EMessageBoxIcons) {
  // ADD ICONS BASE PATH AS AN ENV PARAM.
  switch (icon) {
    case EMessageBoxIcons.info:
      return "/icons/info.svg";
    case EMessageBoxIcons.error:
      return "/icons/error.svg";
    case EMessageBoxIcons.warning:
      return "/icons/warning.svg";
  }
}

export default function MessageBox({ message, kind }: TMessageBoxProps) {
  return (
    <div className={styles.messageBoxComponent}>
      <div className={styles.messageBoxContainer}>
        {kind ? (
          <img src={getPath(kind)} alt="info icon" className={styles.icon} />
        ) : null}

        <span className="big">{message}</span>
      </div>
    </div>
  );
}
