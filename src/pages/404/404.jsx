import React from 'react';
import styles from './404.module.css'; 

export default function ErrPage() {
  return (
    <section>
        <div id={styles.title}>Simple Pure CSS3 • 404 Error Page</div>
        <div className={styles.circles}>
            <p>
            404
            <br />
            <small>PAGE NOT FOUND</small>
            </p>
            <span className={`${styles.circle} ${styles.big}`} />
            <span className={`${styles.circle} ${styles.med}`} />
            <span className={`${styles.circle} ${styles.small}`} />
        </div>
    </section>

  )
}

