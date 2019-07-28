import constants from 'AppConstants/common';

export const getFriendsFromStorage = () => {
    return JSON.parse(localStorage.getItem(constants.friendsStorageKey));
}

export const setFriendsInStorage = friendsList => {
    localStorage.setItem(constants.friendsStorageKey, JSON.stringify(friendsList));
}

