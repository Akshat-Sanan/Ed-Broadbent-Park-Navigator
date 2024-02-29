import React from 'react';
import styles from '../page.module.css';

const Content = () => {
    return (
        <div className={styles.content}>
            <div className={styles.slider}></div>
            <div className={styles.textWrap}>
                <h1 className={styles.h1}>ED BROADBENT </h1>
                <p className={styles.p}>
                    This park is a tribute to the remarkable public servant, Ed Broadbent,
                    who dedicated himself tirelessly to serving Canadians and, particularly, the people of Oshawa.
                </p>
                <audio className={styles.audio} controls src="#"></audio>
            </div>
        </div>
    );
};

export default Content;