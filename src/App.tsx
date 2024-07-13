
import React, { useState } from 'react';
import './App.css'
import ImageHeader from './components/ImageHeader'
import Button from './components/Button';
import Input from './components/Input';
import {type Items } from './types/Utils';
import Itemlist from './components/Itemlist';





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
  

<Input inputValue={inputValue} setInputvalue={setInputvalue} />
   


<Button className="bg-gray-700 w-full text-white p-2">Add</Button>
  </form>
  <div className='h-52 overflow-y-auto'>
    
<Itemlist items={items} setItems={setItems} />
  </div>

</div>

  </div>
  );
}

export default App
