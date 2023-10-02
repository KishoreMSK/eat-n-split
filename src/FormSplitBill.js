import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({ selectedFriend, handleSplitBill }) {
  const [bill, setBill] = useState("");
  const [myExpense, setMyExpense] = useState("");
  const friendsExpense = bill ? bill - myExpense : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");
  const { name } = selectedFriend;

  function handleSubmit(e){
    e.preventDefault()
    if(!bill || !myExpense)
      return
    const value = whoIsPaying === 'user' ? friendsExpense : -myExpense; 
    handleSplitBill(value)
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {name}</h2>
      <label>💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍Your expense</label>
      <input
        type="text"
        value={myExpense}
        onChange={(e) => setMyExpense(
            Number(e.target.value) > bill ? myExpense : Number(e.target.value))}
      />
      <label>🧑‍🤝‍🧑{name}'s expense:</label>
      <input type="text" disabled value={friendsExpense}/>
      <label>🤑Who is paying the bill?</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value='user'>You</option>
        <option value={name}>{name}</option>
      </select>
      <Button onClick={handleSubmit}>Split Bill</Button>
    </form>
  );
}
