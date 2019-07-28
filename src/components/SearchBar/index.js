import React, {useState} from 'react';
import { PropTypes } from 'prop-types';

import {addFriend} from 'AppServices/friends.service';
import styles from './index.module.scss';

const SearchBar = ({setFriendsList}) => {
    const [searchText, setSearchText] = useState('');

    const handleEnter = (e) => {
        if (e.which === 13 || e.keyCode === 13) {
            let gender;
            while(gender !== 'male' && gender !== 'female') {
                gender = prompt('Enter gender of friend(male, female)');
            }
            const updatedFriends = addFriend(searchText, gender);
            if(updatedFriends === 'Friend already exists'){
                alert('Friend with this name already exists');
                return;
            }
            setFriendsList(updatedFriends);
            setSearchText('');
            return false;
        }
    }

    return (
        <input 
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            placeholder="Type the name of a friend"
            className={styles.search}
            onKeyPress={handleEnter}
        />
    )
};

SearchBar.propTypes = {
    setFriendsList: PropTypes.func,
};

SearchBar.defaultProps = {
    setFriendsList: () => {},
};

export default SearchBar;