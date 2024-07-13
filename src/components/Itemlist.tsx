import { Items, ReactsetState } from "../types/Utils";
import Button from "./Button";

type Itemlist={
    items:Items[];
    setItems:ReactsetState<Items[]>;
}

const Itemlist = ({items,setItems}:Itemlist) => {

    const handleDelete=(id:string)=>{
        setItems((prev)=>prev.filter((data)=>data.id !== id));
      }
      

  return (
    items.map((data)=>(

      
   
        <div  key={data.id}  className='flex justify-between items-center border rounded-sm border-slate-600 pl-2 mb2 mr-1 py-2'>
          <p>{data.title}</p>
          
        
        
          <Button onClick={()=>handleDelete(data.id)}>
          <img className='w-2 object-cover' src='https://cdn-icons-png.flaticon.com/128/1214/1214428.png' alt='' />
          </Button>
        </div>
         ))
  )
}

export default Itemlist
