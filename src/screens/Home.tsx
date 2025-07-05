import MessageBox from '../components/message-box/MessageBox';
import styles from './styles.module.scss';
import '../declaration.d.ts';
import TextField from '../components/text-field/TextField.tsx';

export default function Home(){
    return(
        <div className={styles.homeScreen}>
            <h1>Welcome to a simple ToDo App!</h1>
            <MessageBox message='Create your first To Do right away :)'/>
            <TextField />
        </div>
    )
}