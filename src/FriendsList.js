import Friend from "./Friend"
export default function FriendsList({friends, selectedFriend, setSelectedFriend}){
    return (
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            selectedFriend={selectedFriend}
            setSelectedFriend={setSelectedFriend}
          />
        ))}
      </ul>
    );
}