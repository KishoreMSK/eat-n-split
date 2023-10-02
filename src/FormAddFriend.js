import Button from "./Button"
import { useState } from "react"
export default function FormAddFriend({onAddFriends}){
    // const [formData, setFormData] = useState({
    //     name: "",
    //     balance:0,
    //     id: "",
    //     image: "https://i.pravatar.cc/48"
    // })
    const [name,setName] = useState("")
    const [image, setImage] = useState("https://i.pravatar.cc/48")
    // function handleChange(e){
    //     // const [name , value] =  e.target
    //     console.log(e.target);
    //     // setFormData(data => ({
    //     //     ...data,
    //     //     [name]: value
    //     // }))
    // }
    function handleSubmit(e){
        e.preventDefault()
        if(!name || !image) return
        const id = crypto.randomUUID()
        const newFriend = {
            id,
            name,
            image: `${image}?=${id}`,
            balance: 0
         }   
        onAddFriends(newFriend)
        setName("")
        setImage("https://i.pravatar.cc/48")
        
        // setFormData({
        //     id: crypto.randomUUID(),
        //     balance:0,
        //     name: "",
        //     image: "https://i.pravatar.cc/48"
        // })
    }
    return(
         <div>
            <form className="form-add-friend" onSubmit={handleSubmit}>
                <label>🧑‍🤝‍🧑Friend name</label>
                <input 
                   type="text" 
                   name="name"
                   value={name} 
                   onChange={(e) => setName(e.target.value)}
                />
                <label>🌄Image URL</label>
                <input 
                  type="text" 
                  name="image"
                  value={image} 
                  onChange={(e) => setImage(e.target.value)}
                />
                <Button onClick={handleSubmit}>Add </Button>
            </form>
        </div>
    )
}