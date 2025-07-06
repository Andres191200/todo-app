import { TypeAnimation } from 'react-type-animation';
import '../../declaration.d.ts';
import styles from './styles.module.scss';  

var typingSequence:any[] = ['Do the dishes', 1000, 'Take the dog for a walk', 1000, 'Feed the cat', 1000, 'Do the homework']

export default function TextField() {
  return (
    <div className={styles.textFieldComponent}>
        <div className={styles.inputContainer}>
            <input type="text" placeholder=''/>
            <span>Do the dishes</span>
            <TypeAnimation sequence={typingSequence} wrapper='span'/>
        </div>
    </div>
  );
}
