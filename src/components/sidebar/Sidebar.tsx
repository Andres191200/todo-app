import CardHeader from '../card-header/CardHeader';
import ItemList from '../item-list/ItemList';
import styles from './styles.module.scss';

export default function Sidebar(){
    const TEST_LIST = [{id: '1', name:'andy', age: 25}, {id: '1', name:'andy', age: 25}, {id: '1', name:'andy', age: 25}]
    return(
        <div className={styles.sidebarComponent}>
            <div className={styles.sidebarContainer}>
                <CardHeader title={'3 TODOs'} subtitle={'3 done and 2 undone'}/>
                <ItemList elements={TEST_LIST} getKey={(item) => item.id} renderItem={(item) => (
                    <p>{item.name} - {item.age} - {item.id}</p>
                )}/>
            </div>
        </div>
    )
}