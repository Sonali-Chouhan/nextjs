import React, { useEffect, useState } from "react";
import Link from "next/link";
import Router from 'next/router'

const Product = () => {
  const [state, setstate] = useState();
  useEffect(() => {
    var item = state;
    if (typeof window !== "undefined") {
      item = JSON.parse(localStorage.getItem("Item"));
    }
    setstate(item);
  }, []);
  const handleDelete = (id) => {
    var item = state;
    item.splice(id, 1);
    localStorage.setItem("Item", JSON.stringify(item));
    setstate(item);
  };
  const handleEdit = (id) => {
    Router.push({
      pathname: "/blog",
      query: {id:id},
    })
    // <Link href={{ pathname:"/blog", query: { id:id} }} />
  };

  return (
    <div>
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
          {state?.map((i, index) => {
            return (
              <tr key={index}>
                <td>{i.name}</td>
                <td>{i.last}</td>
                <td>{i.email}</td>
                <td>{i.phone}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleUpdate(index)}>Update</button>
                </td>
              </tr>
            );
          })}
        </tbody>
       </table>
      <Link href="/blog">Add User</Link> 
      <br></br>
      <Link href="/">back</Link>
    </div>
  );
};

export default Product;
