import React from 'react';
import styles from '../page.module.css';

const Content = () => {
    return (
        <div>
            <h1 className={styles.h1}>GARDEN OF HUMAN RIGHTS</h1>
            <div className={styles.slider}></div>
            <p className={styles.p}>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.
            </p>
        </div>
    );
};

export default Content;