import React, { useState,useEffect } from "react";
//import Link from"next/link";
import { useRouter } from "next/router";


const About = () => {
  const router = useRouter();
  const [data, setdata] = useState({
    name: "",
    email: "",
    last: "",
    phone: "",
  });
  const [item, setitem] = useState([]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
   
    item.push({
      name:data.name,
      last:data.last,
      email:data.email,
      phone:data.phone

    });
    
    setitem(item)
    setdata(
     
       
      {
        ...data,
        name: '',
        last: '',
        email: '',
        phone: ''
     
      }

      )

  };
  useEffect(()=>{

  },[item])
  const handleDelete=(id)=>{
    
    const obj=item
    obj.splice(id,1)
    setitem(...item,obj)
    console.log("de",item)

  }  
  const handleEdit=(id)=>{
    const record=item[id]
     setdata({
       name:record?.name,
       email:record?.email,
       phone:record?.phone, 
       last:record?.last
     })
}
  const handleUpdate=(id)=>{
    
    var obj=item[id]
    if(id){
      obj.splice(id,1,{
        name:obj.name,
        las:data.last
      })
    }
    setitem(...item,obj)
    setdata({
      ...data,
      name:"",
      last:""
    })
    // setitem(...item,obj)
    
    
   }
  return (
    <div>
      <h4>about</h4>

      <div>
        <h3>Hello</h3>
       
        <form>
          <input
            type="text"
            name='name' 
            value={data.name}
            onChange={(e) => setdata({ ...data, name: e.target.value })}
          />
          <br></br>
          <input
            type="text"
            name="last"
            value={data.last}
            onChange={(e) => setdata({ ...data, last: e.target.value })}
          />
          <br></br>
          <input
            type="text"
            name="email"
            value={data.email}
            onChange={(e) => setdata({ ...data, email: e.target.value })}
          />
          <br></br>
          <input
            type="text"
            name="phone"
            value={data.phone}
            onChange={(e) => setdata({ ...data, phone: e.target.value })}
          />
          <br></br>
          <button onClick={(e) => handleSubmit(e)}>Submit</button>
        </form>
        <table border="1px">
          <thead>
            <tr>
              <th>Name</th>
              <th>Last</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {
              item?.map((i,index)=>{
               return(
                 <tr key={index}>
                   <td>{i.name}</td>
                   <td>{i.last}</td>
                   <td>{i.email}</td>
                   <td>{i.phone}</td>
                    <td>
                      <button onClick={()=>handleDelete(index)}>Delete</button>
                    </td>
                    <td>
                      <button onClick={()=>handleEdit(index)}>Edit</button>
                    </td>
                    <td>
                    <button onClick={()=>handleUpdate(index)}>Update</button>
                    </td>
                 </tr>
               )
              })
            }
          </tbody>
        </table>
        <button onClick={() => router.push("/")}>back</button>
      </div>
    </div>
  );
};

export default About;
