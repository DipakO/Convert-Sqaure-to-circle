import Sqare from "./sqare";
import "./style.css"
import { useState  } from "react";
const Card = ()=>{
    const [number , setNumber] = useState("")
    // console.log(data)
    return(
        <div style={{backgroundColor: "brown", width : "100vw" , height : "100vh"}}>
        <input onChange={(e)=>setNumber(e.target.value)} type="number" />
        {
            number < 1|| number >4 ? <div> {alert('Please Enter Small Number')}
             <div id="cards" style={{display:"flex" , justifyContent : "space-between"}}>
            <Sqare  id = {1}/>                
            <Sqare  id = {2}/>                
            <Sqare  id = {3}/>                
            <Sqare  id = {4}/>                
            </div></div>: 
         <div id="cards" style={{display:"flex" , justifyContent : "space-between"}}>
         <Sqare number = {number} id = {1}/>                
         <Sqare number = {number} id = {2}/>                
         <Sqare number = {number} id = {3}/>                
         <Sqare number = {number} id = {4}/>                
         </div>
          
        }
        
        {/* {number<1 || number >4 ? alert('Please Enter Small Number') : 
         <div id="cards" style={{display:"flex" , justifyContent : "space-between"}}>
         <Sqare number = {number} id = {1}/>                
         <Sqare number = {number} id = {2}/>                
         <Sqare number = {number} id = {3}/>                
         <Sqare number = {number} id = {4}/>                
         </div>
        }    */}
        {/* <div id="cards" style={{display:"flex" , justifyContent : "space-between"}}>
        <Sqare number = {number} id = {1}/>                
        <Sqare number = {number} id = {2}/>                
        <Sqare number = {number} id = {3}/>                
        <Sqare number = {number} id = {4}/>                
        </div> */}
        
        </div>



    )
}
export default Card ;