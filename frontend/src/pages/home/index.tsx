import Navbar from '../../components/Navbar/Navbar';
import styles from './home.module.scss';
import Hero from './Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className={styles.homeContainer}>
        <Hero />
      </div>
    </>
  );
}
