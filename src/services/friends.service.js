import {getFriendsFromStorage, setFriendsInStorage} from 'AppUtils/friends';

export const addFriend = (name, gender) => {
    const friends = getFriendsFromStorage() || [];
    for(let friend of friends){
        if(friend.name === name){
            return 'Friend already exists';
        }
    }
    friends.push({name, commonFriends: Math.ceil(Math.random()*10), gender});
    setFriendsInStorage(friends);
    return friends;
}

export const getFriends = () => {
    return (getFriendsFromStorage() || []);
}

export const deleteFriend = name => {
    const friends = getFriendsFromStorage();
    const newFriends = friends.filter(friend => friend.name !== name);
    setFriendsInStorage(newFriends);
    return newFriends;
}

export const makeFavourite = name => {
    const friends = getFriendsFromStorage();
    const newFriends = friends.map(friend => (friend.name !== name)? {...friend} : {...friend, favourite: !friend.favourite});
    setFriendsInStorage(newFriends);
    return newFriends;
}