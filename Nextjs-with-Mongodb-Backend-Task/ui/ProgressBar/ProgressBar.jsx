import React from 'react';
import styles from './ProgressBar.module.scss';

const ProgressBar = props => {
    const progress = props.progress + '%'
    return (
        <div className={styles.root}>
            <div className={styles.progress} style={{width: progress}}></div>
            <div className={styles.bar}><span>{progress}</span></div>
        </div>
    )
}

export default ProgressBar;