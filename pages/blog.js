import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Blog = () => {

  const router = useRouter();

   const { id } = router.query

  
  const [data, setdata] = useState({
    name: "",
    email: "",
    last: "",
    phone: "",
  });

  const [item, setitem] = useState([]);

  const [state,setstate]=useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    var items =state
    items=items?items:[]
    if(id){
      items.splice(id, 1, {
          name:data.name,
          last:data.last,
          email:data.email,
          phone:data.phone,
        });
      }
    
     else{
      items.push({
        name: data.name,
        last: data.last,
        email: data.email,
        phone: data.phone,
      });
    }
    setitem(items);
    localStorage.setItem("Item",JSON.stringify(items))
    setdata({
      ...data,
      name: "",
      last: "",
      email: "",
      phone: "",
    });
  };
 
  useEffect(()=>{
      
    var object = state;
    if (typeof window !== "undefined") {
       object=JSON.parse(localStorage.getItem("Item"));
       console.log("jj",object)
      }

     setstate(object);

     console.log("jjjjjj",object)

      const record= object[id]

      console.log("gg",record)

      if(record){
      setdata({
        name:record?.name,
        email:record?.email,
        phone:record?.phone,
        last:record?.last
      }) }
    
  },[id])
  return (
    <div>
      <form onSubmit={ handleSubmit}>
        <label>Name</label><br></br>
        <input
          type="text"
          name="name"
          value={data.name}
          onChange={(e) => setdata({ ...data, name: e.target.value })}
        />
        <br></br>
        <label>Last</label><br></br>
        <input
          type="text"
          name="last"
          value={data.last}
          onChange={(e) => setdata({ ...data, last: e.target.value })}
        />
        <br></br>
        <label>Email</label><br></br>
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={(e) => setdata({ ...data, email: e.target.value })}
        />
        <br></br>
        <label>Phone</label><br></br>
        <input
          type="text"
          name="phone"
          value={data.phone}
          onChange={(e) => setdata({ ...data, phone: e.target.value })}
        />
        <br></br>
        {
          id ?
          <button type="submit">Save</button>
          :
          <button type="submit">Submit</button>
        }
        
      </form>

      <Link href="/">back to Home</Link><br></br>
      <button onClick={() => router.push("/product")}>back</button>
    </div>
  );
};

export default Blog;
