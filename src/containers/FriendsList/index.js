import React from 'react';
import { PropTypes } from 'prop-types';

import Friend from 'AppComponents/Friend';

const FriendsList = ({friends, setFriendsList}) => {
    return (
        friends.map(friend => (
            <Friend friend={friend} setFriendsList={setFriendsList} key={friend.name} />
        ))
    );
};

FriendsList.propTypes = {
    frienda: PropTypes.array,
    setFriendsList: PropTypes.func,
};

FriendsList.defaultProps = {
    friend: [],
    setFriendsList: () => {},
};

export default FriendsList;