'use client';
import { useState } from 'react';
import { increment } from '../../utils/counterUtils';
import styles from './Counter.module.css';

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((prevCount) => increment(prevCount));

  return (
    <div className={styles.counterContainer}>
      <h1 className={styles.count}>{count}</h1>
      <div className={styles.buttons}>
        <button className={styles.decrementButton}>-</button>
        <button
          className={styles.incrementButton}
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
    </div>
  );
}
