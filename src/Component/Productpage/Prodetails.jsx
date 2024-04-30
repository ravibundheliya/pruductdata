import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Prodetails() {
  
    const [data,setdata]=useState([]);
    const params=useParams();

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${params.id}`)
            .then(res => res.json())
            .then(console.log);
    })
  
return (
    <div>
        Welcome...!        
    </div>
  )
}

export default Prodetails
