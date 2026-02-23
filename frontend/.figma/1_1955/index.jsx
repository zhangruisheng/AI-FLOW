import React from 'react';

import styles from './index.module.scss';

const Component = () => {
  return (
    <div className={styles.component}>
      <div className={styles.component6}>
        <div className={styles.generatedVisuals}>
          <div className={styles.frame}>
            <img
              src="../image/ml0gzrec-fc6bzwx.svg"
              className={styles.replaceIcon}
            />
            <p className={styles.replaceImage}>替换图片</p>
          </div>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.container}>
          <div className={styles.iconContainer}>
            <img src="../image/ml0gzrec-p4ir7eo.svg" className={styles.krea7} />
          </div>
          <p className={styles.imageInput}>Image input</p>
        </div>
        <p className={styles.image}>Image</p>
      </div>
      <div className={styles.instance}>
        <div className={styles.ellipse1} />
      </div>
    </div>
  );
}

export default Component;
