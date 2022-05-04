import React, { useState,useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Blog = () => {
  const router = useRouter();
  
  const { id } = router.query
  console.log("id",id)
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

    item.push({
      name: data.name,
      last: data.last,
      email: data.email,
      phone: data.phone,
    });

    setitem(item);
    localStorage.setItem("Item",JSON.stringify(item))
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
     console.log("hhh",state);
      // const record= object[id]
      // console.log("gg",record)
      // if(record){
      // setdata({
      //   name:record?.name,
      //   email:record?.email,
      //   phone:record?.phone,
      //   last:record?.last
      // })

    
     
    
  },[id])
  return (
    <div>
      <form>
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
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </form>

      <Link href="/">back to Home</Link><br></br>
      <button onClick={() => router.push("/product")}>back</button>
    </div>
  );
};

export default Blog;
