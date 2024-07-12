
import React, { useState } from 'react';
import './App.css'
import ImageHeader from './components/ImageHeader'

type Items={
title:string;
id:string;
}

function App() {
  const [items,setItems]=useState<Items[]>([]);
const [inputValue,setInputvalue]=useState<string>(" ");

const handleSubmit =(event:React.FormEvent)=>{
  event.preventDefault();
  setItems(prev=>[...prev,{title:inputValue,id:Date.now().toString()}]);
  setInputvalue("")
}


const handleDelete=(id:string)=>{
  setItems((prev)=>prev.filter((data)=>data.id !== id));
}

  return (
  <div className='h-[100vh] flex flex-col justify-center items-center' >
<ImageHeader />

<div className='w-[350px]'>
  <form className='mb-5' onSubmit={handleSubmit}>
   <input />
    <button type='submit' className='bg-gray-700 w-full text-white '>Add</button>
  </form>
  <div className='h-52 overflow-y-auto'>
    {items.map((data)=>(

      
   
<div  key={data.id}  className='flex justify-between items-center border rounded-sm border-slate-600 pl-2 mb2 mr-1 py-2'>
  <p>{data.title}</p>
  <button onClick={()=>handleDelete(data.id)}><img className='w-2 object-cover' src='https://cdn-icons-png.flaticon.com/128/1214/1214428.png' alt='' /></button>
</div>
 ))}
  </div>

</div>

  </div>
  );
}

export default App
