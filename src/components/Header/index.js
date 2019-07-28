import React from 'react';
import styles from './index.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.header_text}>The FriendList</h1>
        </div>
    )
};

export default Header;