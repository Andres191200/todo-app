import React from 'react';
import styles from './styles.module.scss';
import "../../declaration.d.ts";

type TTextArea = {
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void,
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>

export default function TextArea({ onChange, ...rest }: TTextArea) {
  return (
    <div className={styles.textAreaComponent}>
        <textarea draggable={false} placeholder='Some description' onChange={onChange} {...rest}/>
    </div>
  )
}
