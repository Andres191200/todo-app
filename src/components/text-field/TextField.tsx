import '../../declaration.d.ts';
import styles from './styles.module.scss';

export default function TextField() {
  return (
    <div className={styles.textFieldComponent}>
        <div className={styles.inputContainer}>
            <input type="text" placeholder=''/>
            <span>Do the dishes</span>
        </div>
    </div>
  );
}
