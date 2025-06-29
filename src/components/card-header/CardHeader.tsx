import styles from './styles.module.scss';

interface ICardHeader{
    title: String,
    subtitle?: String,
}

export default function CardHeader({ title, subtitle} : ICardHeader) {
  return (
    <div className={styles.cardHeaderComponent}>
      <h3>{title}</h3>
      <p className="muted">{subtitle}</p>
    </div>
  );
}
