import styles from './styles.module.scss';

interface IItemList<T> {
  elements: T[];
  renderItem: (item: T) => React.ReactNode;
  getKey: (item: T) => string;
}

export default function ItemList<T>({
  elements,
  renderItem,
  getKey,
}: IItemList<T>) {
  return (
    <div className={styles.itemListComponent}>
      <div className={styles.itemListContainer}>
        <ul>
          {elements.map((element) => (
            <li key={getKey(element)}>{renderItem(element)}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
