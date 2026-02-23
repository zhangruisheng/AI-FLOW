import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.component}>
      <p className={styles.text}>角色</p>
      <div className={styles.frame2}>
        <div className={styles.component20}>
          <img src="../image/mlgf38oi-qq895c1.svg" className={styles.frame} />
          <p className={styles.textDescription}>豆包妹妹</p>
        </div>
        <img
          src="../image/mlgf38oj-i63uz9o.png"
          className={styles.generatedVisuals}
        />
      </div>
      <div className={styles.frame2}>
        <div className={styles.component20}>
          <img src="../image/mlgf38oi-qq895c1.svg" className={styles.frame} />
          <p className={styles.textDescription}>豆包妹妹</p>
        </div>
        <img
          src="../image/mlgf38oj-i63uz9o.png"
          className={styles.generatedVisuals}
        />
      </div>
      <div className={styles.container}>
        <p className={styles.image}>创建角色</p>
        <img src="../image/mlgf38oi-bdf4y6a.svg" className={styles.addIcon} />
      </div>
    </div>
  );
}

export default Component;
