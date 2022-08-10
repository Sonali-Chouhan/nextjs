import React from "react"

const Hello=()=>{
return(

    <>
    <form>
        <label>Name</label>
        <input type="text" name="name"  />
        <label>Last</label>
        <input type="text" name="last"  />
        <label>Contact</label>
        <input type="number" name="contact"/>
        <label>Email</label>
        <input type="email" name="email"/>
        <label>Title</label>
        <input type="text" name="title"/>
        <label></label>
    </form>
    
    
    </>
)


}
export default Hello;
