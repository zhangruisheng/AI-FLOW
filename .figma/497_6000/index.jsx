import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.lora}>
        <img src="../image/mlrxbumx-6xh61cv.svg" className={styles.icon} />
      </div>
      <p className={styles.text}>LORA</p>
      <div className={styles.autoWrapper}>
        <img src="../image/mlrxbumx-ivfc5f3.png" className={styles.expandIcon} />
      </div>
    </div>
  );
}

export default Component;
