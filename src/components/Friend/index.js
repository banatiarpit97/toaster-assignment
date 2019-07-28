import React from 'react';
import { PropTypes } from 'prop-types';

import {makeFavourite as makeFavouriteInStorage, deleteFriend as deleteFriendFromStorage } from 'AppServices/friends.service';
import styles from './index.module.scss';

const Friend = ({friend, setFriendsList}) => {
    const makeFavourite = () => {
        const updatedFriends = makeFavouriteInStorage(friend.name);
        setFriendsList(updatedFriends);
    };

    const deleteFriend = () => {
        const updatedFriends = deleteFriendFromStorage(friend.name);
        setFriendsList(updatedFriends);
    };

    return (
        <div className={styles.friendWrapper}>
            <div className={styles.info}>
                <h3>{friend.name}</h3>
                <p>{friend.commonFriends} friends in common</p>
                <p>{friend.gender}</p>
            </div>
            <div className={styles.actions}>
                <i 
                    className={`${friend.favourite ? 'fas': 'far'} fa-star`}
                    onClick={makeFavourite}
                />
                <i
                    className='fas fa-trash-alt'
                    onClick={deleteFriend}    
                />
            </div>
        </div>
    )
};

Friend.propTypes = {
    friend: PropTypes.shape({name: PropTypes.string, gender: PropTypes.string, commonFriends:  PropTypes.number}),
    setFriendsList: PropTypes.func,
};

Friend.defaultProps = {
    friend: {name: '', gender: '', commonFriends: 0},
    setFriendsList: () => {},
};

export default Friend;