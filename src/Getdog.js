import axios from "axios";
import { useEffect,useState } from "react";

export default function GetDog({imageClicked,setImageClicked,likes,dislikes}){
    
const[image,setImage]=useState("")
    useEffect(() =>{
        if (imageClicked&&(likes<10&&dislikes<10)){
            async function fetchData(){
                const data= await axios.get("https://dog.ceo/api/breeds/image/random")
                console.log(data.data.message);
                setImage(data.data.message)
            }
            fetchData()
            setImageClicked(false)
        }
      
    },[imageClicked,setImageClicked,likes,dislikes])

    return(
        <div className="dogimg">
        <img alt="error" src={image}></img>
        </div>

    )
}