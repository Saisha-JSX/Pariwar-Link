import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to PariwarLink 👨‍👩‍👧‍👦</h1>
      <p>This is your family-first social app.</p>
    </div>
  );
}
