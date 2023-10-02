import Button from "./Button";

export default function Friend({ friend, selectedFriend, setSelectedFriend }) {
  const message =
    friend.balance === 0
      ? `You and ${friend.name} are even`
      : friend.balance < 0
      ? `You owe ${friend.name} ${Math.abs(friend.balance)}$`
      : `${friend.name} owes you ${friend.balance}`;

  const isSelected = selectedFriend?.id === friend?.id
  function handleClick() {
    setSelectedFriend(cur => cur?.id === friend?.id ? null : friend)
  }
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance < 0 ? "red" : friend.balance > 0 ? "green" : ""
        }
      >
        {message}
      </p>
      <Button onClick={handleClick}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
