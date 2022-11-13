const Sqare = ({number , id})=>{
    return(
        
        <div >
        {
           id === +number ? <div className= "square"  id= "circle">   </div>:
             <div className= "square">   </div>
        }
        </div>
    )
}
export default Sqare;