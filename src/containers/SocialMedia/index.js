import React, {useState, useEffect} from 'react';

import FriendsList from 'AppContainers/FriendsList';
import Header from 'AppComponents/Header';
import SearchBar from 'AppComponents/SearchBar';
import Pagination from 'AppComponents/Pagination';
import constants from 'AppConstants/common';
import {getFriends} from 'AppServices/friends.service';

const SocialMedia = () => {
    const [friendsList, setFriendsList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const pagesLength = Math.ceil(friendsList.length/2);
    const {itemsPerPage} = constants;
    useEffect(() => {
        setFriendsList(getFriends);
    }, []);
    useEffect(() => {
        if((friendsList.length > 0) && (currentPage*2+1 > friendsList.length)){
            setCurrentPage(currentPage-1)
        }
    }, [friendsList]);

    return (
        <>
            <Header />
            <SearchBar setFriendsList={setFriendsList} />
            <FriendsList
                friends={friendsList.slice(currentPage*itemsPerPage, currentPage*itemsPerPage+itemsPerPage)}
                setFriendsList={setFriendsList}
            />
            { (friendsList.length > itemsPerPage) && (
                <Pagination currentPage={currentPage} pagesLength={pagesLength} setCurrentPage={setCurrentPage} />
            )}
        </>
    )
};

export default SocialMedia;